import { Request, Response } from 'express'
import ProductService from '@hm-services/product.service'
import CommonController from '@hm-controllers/common.controller'

class Controller extends CommonController {
  private _service: ProductService

  constructor() {
    super()
    this._service = new ProductService()
  }

  getProducts = async (req: Request, res: Response) => {
    try {
      const body = await this._service.getProducts(req.query)
      return this.ok(res, { success: true, body })
    } catch (err) {
      return this.serverError(res, { success: false, message: err.message })
    }
  }
}

export default Controller