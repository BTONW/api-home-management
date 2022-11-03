import { 
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'
import { BitStatus } from '@hm-enum/entity.enum'

export interface CommonEntityAttributes {
  id: number
  created_at: Date
  updated_at: Date
  is_active: BitStatus
}

@Entity()
export class CommonEntity extends BaseEntity implements CommonEntityAttributes {
  @PrimaryGeneratedColumn()
  id: number

  @Column('bit', { default: BitStatus.TRUE })
  is_active: BitStatus

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}