import moment from 'moment-timezone'
import { BitStatus, PaymentType, BudgetCode } from '@hm-enum/entity.enum'
import { EntityRepository, Repository, getRepository } from 'typeorm'
import { CriteriaSearchCostValue, BodyCreateCostValue } from '@hm-dto/cost-value.dto'
import { Budget as BudgetEntity } from '@hm-entities/Budget.entity'
import { Balance as BalanceEntity } from '@hm-entities/Balance.entity'
import { CostValue as CostValueEntity } from '@hm-entities/CostValue.entity'

@EntityRepository(CostValueEntity)
export class CostValueRepository extends Repository<CostValueEntity> {
  getQuery = () => {
    const query = this.createQueryBuilder('cost_value')
      .leftJoinAndSelect('cost_value.product', 'product')
      .where('cost_value.is_active = :is_active', { is_active: BitStatus.TRUE })
    
    return query
  }

  getCostValues = ({ id, dates, payments }: CriteriaSearchCostValue) => {
    const query = this.getQuery()

    if (id) {
      query.andWhere('cost_value.id = :id', { id })
    }
    if (dates) {
      query.andWhere('cost_value.date IN (:...dates)', { dates })
    }
    if (payments) {
      query.andWhere('cost_value.payment IN (:...payments)', { payments })
    }

    return query
  }

  createCostValues = async (body: BodyCreateCostValue[]) => {
    const costValueModels = body.map(item => this.create({
      date: item.date,
      payment: item.payment,
      is_active: BitStatus.TRUE,
      cost_amount: item.cost_amount,
      product: {
        id: item.product_id
      }
    }))

    const result = await this.save(costValueModels)
    
    const budgetReop = getRepository(BudgetEntity)
    const budget = await budgetReop.findOne({ code: BudgetCode.FRI })

    if (budget?.id) {
      const balanceRepo = getRepository(BalanceEntity)
      await Promise.all(result
        .filter(item => 
          item.is_active === BitStatus.TRUE &&
          item.payment === PaymentType.CREDIT &&
          moment(item.date).format('ddd') === BudgetCode.FRI
        )
        .map(async item => {
          const hasBalance = await balanceRepo.findOne({ date: item.date })
          return balanceRepo.save(
            balanceRepo.create(hasBalance?.id
              ? {
                  ...hasBalance,
                  balance_amount: hasBalance?.balance_amount - item.cost_amount
                }
              : {
                  date: item.date,
                  is_active: BitStatus.TRUE,
                  balance_amount: budget.budget_amount - item.cost_amount
                }
            )
          )
        })
      )
    }

    return result
  }
}