import {
  Column,
  Entity,
  JoinColumn,
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

  //xac dinh moi quan he voi user
  @ManyToOne(() => UserEntity, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
