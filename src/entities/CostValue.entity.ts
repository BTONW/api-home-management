import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { PaymentType } from '@hm-enum/entity.enum'
import { CommonEntity } from './CommonEntity'
import { Product as ProductEntity } from './Product.entity'

@Entity()
export class CostValue extends CommonEntity {

  @Column('real', { nullable: false, default: 0 })
  cost_amount: number

  @Column('date')
  date: Date

  @Column('enum', { enum: PaymentType, default: PaymentType.CASH })
  payment: PaymentType

  @ManyToOne(() => ProductEntity, obj => obj.cost_values, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity
}
