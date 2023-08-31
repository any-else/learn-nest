import {
  Column,
  Decimal128,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/database/user.entity';
@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;
  @Column({
    type: 'decimal',
    default: 0,
  })
  price: Decimal128;
  @Column({ type: 'varchar', nullable: true })
  description: string;

  //xac dinh moi quan he
  @ManyToOne(() => UserEntity, (user) => user.products)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
