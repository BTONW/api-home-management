import { getRepository, FindManyOptions } from 'typeorm'
import { Month as MonthEntity } from '@hm-entities/Month.entity'
class Service {

  constructor() {
    
  }

  getMonths(options: FindManyOptions<MonthEntity> = {}) {
    return getRepository(MonthEntity)
      .find({
        order: { 'code': 'ASC' },
        ...options,
      })
  }

}

export default Service