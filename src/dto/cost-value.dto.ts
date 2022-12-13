import { PaymentType } from '@hm-enum/entity.enum'

export interface CriteriaSearchCostValue {
  id?: number
  dates?: string[]
  payments?: PaymentType[]
}

export interface CriteriaReportCostValue {
  groupDays?: {
    type: 'weekday' | 'weekend' | ''
    startAt: string // string should => 'YYYY-MM-DD'
    endAt: string
    days: string[]
  }[]
}

export interface BodyCreateCostValue {
  date: string
  product_id: number
  cost_amount: number
  payment: PaymentType
}

export interface BodyUpdateCostValue {
  date: string
  cost_amount: number
  cost_value_id: number
}