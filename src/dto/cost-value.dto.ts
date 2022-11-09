import { PaymentType } from '@hm-enum/entity.enum'

export interface CriteriaSearchCostValue {
  id?: number
  dates?: string[]
  payments?: PaymentType[]
}

export interface BodyCreateCostValue {
  date: string
  product_id: number
  cost_amount: number
  payment: PaymentType
}