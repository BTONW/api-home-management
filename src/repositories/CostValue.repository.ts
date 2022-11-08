import { BitStatus } from '@hm-enum/entity.enum'
import { EntityRepository, Repository } from 'typeorm'
import { CriteriaSearchCostValue } from '@hm-dto/cost-value.dto'
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
}