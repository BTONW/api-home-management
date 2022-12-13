import moment from 'moment-timezone'
import { getCustomRepository } from 'typeorm'
import { BudgetCode, PaymentType } from '@hm-enum/entity.enum'
import { CostValueRepository } from '@hm-repositories/CostValue.repository'
import { CostValue as CostValueEntity } from '@hm-entities/CostValue.entity'
import { CriteriaSearchCostValue, CriteriaReportCostValue, BodyCreateCostValue, BodyUpdateCostValue } from '@hm-dto/cost-value.dto'

class Service {

  private _filterCostValueByDay = (date: Date, day: string) =>
    moment(date).format('ddd') === day

  private _mapCostValueByDay = (cost: CostValueEntity) => ({
    CostValueId: cost.id,
    Product: cost.product.name,
    Price: cost.cost_amount
  })

  getCostValues = async (options: CriteriaSearchCostValue = {}) => {
    const costValues = await getCustomRepository(CostValueRepository)
      .getCostValues(options)
      .getMany()

    return costValues
  }

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

  getReportCostValues = async (options: CriteriaReportCostValue) => {
    
    const request = options.groupDays.map(group => {
      const params: CriteriaSearchCostValue = {
        dates: group.days,
        payments: [PaymentType.CREDIT]
      }
      return getCustomRepository(CostValueRepository)
        .getSumCostValues(params)
        .getRawOne()
    })

    const result = await Promise.all(request)

    return options.groupDays.map((group, idx) => ({
      ...group,
      total: result[idx]?.sum || 0
    }))
  }

  createCostValues = async (options: BodyCreateCostValue[]) => {
    const result = await getCustomRepository(CostValueRepository)
      .createCostValues(options)

    return result
  }

  updateCostValues = async (options: BodyUpdateCostValue[]) => {
    const result = await getCustomRepository(CostValueRepository)
      .updateCostValues(options)

    return result
  }

}

export default Service