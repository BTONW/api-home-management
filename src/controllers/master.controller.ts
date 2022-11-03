import { Request, Response } from 'express'
import MasterService from '@hm-services/master.service'
// import { HttpResponse } from '@itbudget-services/http/http-response.service'

class Controller {
  private _service: MasterService

  constructor() {
    this._service = new MasterService()
  }

  async getCostItem(req: Request, res: Response) {

  }
}

export default Controller