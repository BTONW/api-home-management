import { Request, Response } from 'express'
import MasterService from '@hm-services/master.service'
import CommonController from '@hm-controllers/common.controller'

class Controller extends CommonController {
  private _service: MasterService

  constructor() {
    super()
    this._service = new MasterService()
  }

  getBalance = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getBalance(req.query.date)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }

  getMonths = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getMonths()
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }

  getBudgets = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getBudgets()
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }
}

export default Controller