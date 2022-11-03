import { Column, Entity, OneToMany } from 'typeorm'
import { CommonEntity } from './CommonEntity'
import { CostValue as CostValueEntity } from './CostValue.entity'

@Entity()
export class Product extends CommonEntity {
  @Column({ unique: true })
  name: string

  @OneToMany(() => CostValueEntity, obj => obj.product)
  cost_values: CostValueEntity[]
}
