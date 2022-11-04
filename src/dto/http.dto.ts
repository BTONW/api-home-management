import { HttpStatus } from '@hm-enum/controller.enum'

export interface AppHttpResponse {
  message?: string
  success?: boolean
  statusCode?: HttpStatus
  body?: any
  errors?: any
  total?: number | null
}