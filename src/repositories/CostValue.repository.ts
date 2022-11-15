import { BitStatus } from '@hm-enum/entity.enum'
import { EntityRepository, Repository } from 'typeorm'
import { CriteriaSearchCostValue, BodyCreateCostValue } from '@hm-dto/cost-value.dto'
import { CostValue as CostValueEntity } from '@hm-entities/CostValue.entity'

@EntityRepository(CostValueEntity)
export class CostValueRepository extends Repository<CostValueEntity> {
  getQuery = () => {
    const query = this.createQueryBuilder('cost_value')
      .leftJoinAndSelect('cost_value.product', 'product')
      .where('cost_value.is_active = :is_active', { is_active: BitStatus.TRUE })
      .andWhere('cost_value.cost_amount > 0')
    
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
    const models = body.map(item => this.create({
      date: item.date,
      payment: item.payment,
      is_active: BitStatus.TRUE,
      cost_amount: item.cost_amount,
      product: {
        id: item.product_id
      }
    }))
    return this.save(models)
  }
}