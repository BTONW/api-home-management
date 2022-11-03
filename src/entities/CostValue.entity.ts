import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { PaymentType } from '@hm-enum/entity.enum'
import { CommonEntity } from './CommonEntity'
import { Month as MonthEntity } from './Month.entity'
import { Product as ProductEntity } from './Product.entity'

@Entity()
export class CostValue extends CommonEntity {

  @Column('real', { nullable: true })
  cost_amount: number

  @Column('enum', { enum: PaymentType, default: PaymentType.CASH })
  payment: PaymentType

  @Column('int', { unique: true, width: 2 })
  day: number

  @Column('int', { unique: true, width: 4 })
  year: number

  @ManyToOne(() => MonthEntity, obj => obj.cost_values, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'month_code' })
  month: MonthEntity

  @ManyToOne(() => ProductEntity, obj => obj.cost_values, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity
}
