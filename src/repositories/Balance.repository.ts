import { BitStatus } from '@hm-enum/entity.enum'
import { EntityRepository, Repository } from 'typeorm'
import { Balance as BalanceEntity } from '@hm-entities/Balance.entity'
import { CriteriaSearchBalance, BodyUpsertBalance } from '@hm-dto/balance.dto'

@EntityRepository(BalanceEntity)
export class BalanceRepository extends Repository<BalanceEntity> {
  getQuery = () => {
    const query = this.createQueryBuilder('balance')
      .where('balance.is_active = :is_active', { is_active: BitStatus.TRUE })
    
    return query
  }

  getBalance = ({ dates }: CriteriaSearchBalance) => {
    const query = this.getQuery()

    if (dates) {
      query.andWhere('balance.date IN (:...dates)', { dates })
    }

    return query
  }

  upsertBalance = async (body: BodyUpsertBalance) => {
    const hasItem = await this.findOne({ date: body.date })

    const model = this.create(hasItem?.id
      ? { ...hasItem, balance_amount: body.balance_amount }
      : { ...body, is_active: BitStatus.TRUE }  
    )

    return this.save(model)
  }
}