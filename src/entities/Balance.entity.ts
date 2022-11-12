import { Column, Entity } from 'typeorm'
import { CommonEntity } from './CommonEntity'

@Entity()
export class Balance extends CommonEntity {

  @Column('real', { nullable: false, default: 0 })
  balance_amount: number

  @Column('date', { unique: true })
  date: Date
  
}