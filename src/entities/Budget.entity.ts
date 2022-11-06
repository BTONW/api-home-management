import { Column, Entity } from 'typeorm'
import { BudgetCode } from '@hm-enum/entity.enum'
import { CommonEntity } from './CommonEntity'

@Entity()
export class Budget extends CommonEntity {
  @Column({ type: 'varchar', unique: true, length: 3, nullable: false })
  code: BudgetCode

  @Column('real', { nullable: false, default: 0 })
  budget_amount: number
  
}