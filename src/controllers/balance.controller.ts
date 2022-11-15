import { Request, Response } from 'express'
import BalanceService from '@hm-services/balance.service'
import CommonController from '@hm-controllers/common.controller'

class Controller extends CommonController {
  private _service: BalanceService

  constructor() {
    super()
    this._service = new BalanceService()
  }

  getBalances = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getBalances(req.query)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }

  upsertBalance = async (req: Request, res: Response) => {
    try {
      const body = await this._service.upsertBalance(req.body)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }
}

export default Controller