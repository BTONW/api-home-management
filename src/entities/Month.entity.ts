import { Column, Entity, OneToMany } from 'typeorm'
import { MonthCode } from '@hm-enum/entity.enum'
import { CommonEntity } from './CommonEntity'
import { CostValue as CostValueEntity } from './CostValue.entity'

@Entity()
export class Month extends CommonEntity {
  @Column({ type: 'varchar', unique: true, length: 2, nullable: false })
  code: MonthCode

  @Column({ type: 'varchar', length: 20 })
  name_en_full: string

  @Column({ type: 'varchar', length: 3 })
  name_en_short: string

  @Column({ type: 'varchar', length: 20 })
  name_th_full: string

  @Column({ type: 'varchar', length: 5  })
  name_th_short: string

  @OneToMany(() => CostValueEntity, obj => obj.month)
  cost_values: CostValueEntity[]
  
}