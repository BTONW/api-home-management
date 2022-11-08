import { PaymentType } from '@hm-enum/entity.enum'

export interface CriteriaSearchCostValue {
  id?: number
  dates?: string[]
  payments?: PaymentType[]
}