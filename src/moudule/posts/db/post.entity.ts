import {
  Column,
  Entity,
  JoinColumn,
  // JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/database/user.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  post_id: string;
  @Column({
    type: 'varchar',
    length: 255,
  })
  title: string;
  @Column({
    type: 'text',
  })
  content: string;
  @Column({
    type: 'text',
  })
  image: string;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  @JoinColumn({ name: 'users_id' })
  user: UserEntity;
}
