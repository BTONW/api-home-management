import { Response } from 'express'
import { HttpStatus } from '@hm-enum/controller.enum'
import { AppHttpResponse } from '@hm-dto/http.dto'

class Controller {

  private _response: AppHttpResponse = {
    body: '',
    message: '',
    total: null,
    success: true,
    statusCode: HttpStatus.OK,
  }

  private _setHeaderResponse(res: Response) {
    res.set('Cache-Control', 'no-store')
    res.set('Pragma', 'no-cache')
  }

  private _setHttpResponse(data: AppHttpResponse) {
    Object.keys(this._response).forEach(key => {
      if (!data[key]) {
        data[key] = this._response[key]
      }
    })
    return data
  }

  constructor () {
    
  }

  send(res: Response, data: AppHttpResponse = this._response) {
    this._setHeaderResponse(res)
    return res.json(this._setHttpResponse(data))
  }

  ok(res: Response, data: AppHttpResponse = this._response) {
    return this.send(res, { ...data, statusCode: HttpStatus.OK })
  }

  badRequest(res: Response, data: AppHttpResponse = this._response) {
    return this.send(res, { ...data, statusCode: HttpStatus.BAD_REQUEST })
  }

  unAuthorize(res: Response, data: AppHttpResponse = this._response) {
    return this.send(res, { ...data, statusCode: HttpStatus.UN_AUTHORIZE })
  }

  forbidden(res: Response, data: AppHttpResponse = this._response) {
    return this.send(res, { ...data, statusCode: HttpStatus.FORBIDDEN })
  }

  notFound(res: Response, data: AppHttpResponse = this._response) {
    return this.send(res, { ...data, statusCode: HttpStatus.NOT_FOUND })
  }

  serverError(res: Response, data: AppHttpResponse = this._response) {
    return this.send(res, { ...data, statusCode: HttpStatus.SERVER_ERROR })
  }
}

export default Controller
