import { Request, Response } from 'express'
import CostValueService from '@hm-services/cost-value.service'
import CommonController from '@hm-controllers/common.controller'

class Controller extends CommonController {
  private _service: CostValueService

  constructor() {
    super()
    this._service = new CostValueService()
  }

  getCostValues = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getCostValues(req.query)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }

  getCostValuesByDays = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getCostValuesByDays(req.query)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }

  createCostValues = async (req: Request, res: Response) => {
    try {
      const body = await this._service.createCostValues(req.body)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }
}

export default Controller