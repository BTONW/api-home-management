import { BitStatus } from '@hm-enum/entity.enum'
import { Column, Entity, OneToMany } from 'typeorm'
import { CommonEntity } from './CommonEntity'
import { CostValue as CostValueEntity } from './CostValue.entity'

@Entity()
export class Product extends CommonEntity {
  @Column('text', { unique: true })
  name: string

  @Column('text')
  image: string

  @Column('bit', { default: BitStatus.FALSE })
  is_regular: BitStatus

  @OneToMany(() => CostValueEntity, obj => obj.product)
  cost_values: CostValueEntity[]
}
