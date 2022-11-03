import { Column, Entity, OneToMany } from 'typeorm'
import { MonthCode } from '@hm-enum/entity.enum'
import { CommonEntity } from './CommonEntity'
import { CostValue as CostValueEntity } from './CostValue.entity'

@Entity()
export class Month extends CommonEntity {
  @Column({ type: 'varchar', unique: true, width: 2, nullable: false })
  code: MonthCode

  @Column({ type: 'varchar', width: 20 })
  name_full: string

  @Column({ type: 'varchar', width: 3 })
  name_short: string

  @OneToMany(() => CostValueEntity, obj => obj.month)
  cost_values: CostValueEntity[]
  
}