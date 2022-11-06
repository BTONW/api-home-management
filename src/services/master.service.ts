import { BitStatus } from '@hm-enum/entity.enum'
import { getRepository, FindManyOptions } from 'typeorm'
import { Month as MonthEntity } from '@hm-entities/Month.entity'
import { Budget as BudgetEntity } from '@hm-entities/Budget.entity'

class Service {

  constructor() {
    
  }

  getMonths(options: FindManyOptions<MonthEntity> = {}) {
    return getRepository(MonthEntity)
      .find({
        order: { 'code': 'ASC' },
        ...options,
        where: options?.where 
          ? options?.where
          : { is_active: BitStatus.TRUE }
      })
  }

  getBudgets(options: FindManyOptions<BudgetEntity> = {}) {
    return getRepository(BudgetEntity)
      .find({
        order: { 'code': 'ASC' },
        ...options,
        where: options?.where 
          ? options?.where
          : { is_active: BitStatus.TRUE }
      })
  }

}

export default Service