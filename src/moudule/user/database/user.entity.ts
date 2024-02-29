import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  // JoinColumn,
} from 'typeorm';
import { ProductEntity } from '../../product/db/product.entity';
import { PostEntity } from '../../posts/db/post.entity';
import { Exclude, Transform } from 'class-transformer';
export enum ROLE {
  ADMIN = 1,
  USER,
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Transform((username) => username.value.toUpperCase())
  @Column()
  username: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  address: string;

  @Column({
    default: ROLE.USER,
  })
  role: ROLE;

  //xac moi quan he voi product
  @OneToMany(() => ProductEntity, (product) => product.user)
  products: ProductEntity[];

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];
}
