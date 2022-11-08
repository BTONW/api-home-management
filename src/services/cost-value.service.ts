import moment from 'moment-timezone'
import { getCustomRepository } from 'typeorm'
import { BudgetCode } from '@hm-enum/entity.enum'
import { CostValueRepository } from '@hm-repositories/CostValue.repository'
import { CostValue as CostValueEntity } from '@hm-entities/CostValue.entity'
import { CriteriaSearchCostValue } from '@hm-dto/cost-value.dto'

class Service {

  constructor() {
    
  }

  private _filterCostValueByDay = (date: Date, day: BudgetCode) =>
    moment(date).format('ddd') === day

  private _mapCostValueByDay = (cost: CostValueEntity) => ({
    Product: cost.product.name,
    Price: cost.cost_amount
  })

  getCostValuesByDays = async (options: CriteriaSearchCostValue = {}) => {
    const costValues = await getCustomRepository(CostValueRepository)
      .getCostValues(options)
      .getMany()

    return {
      [BudgetCode.MON]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.MON))
        .map(this._mapCostValueByDay),
      [BudgetCode.TUE]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.TUE))
        .map(this._mapCostValueByDay),
      [BudgetCode.WED]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.WED))
        .map(this._mapCostValueByDay),
      [BudgetCode.THU]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.THU))
        .map(this._mapCostValueByDay),
      [BudgetCode.FRI]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.FRI))
        .map(this._mapCostValueByDay),
      [BudgetCode.SAT]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.SAT))
        .map(this._mapCostValueByDay),
      [BudgetCode.SUN]: costValues
        .filter(cost => this._filterCostValueByDay(cost.date, BudgetCode.SUN))
        .map(this._mapCostValueByDay),
    }
  }

}

export default Service