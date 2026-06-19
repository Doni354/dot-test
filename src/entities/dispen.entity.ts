import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('dispen')
export class Dispen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alasan: string;

  @Column({ default: 'pending' })
  status: string;

  @Column({ name: 'id_user' })
  id_user: number;

  @ManyToOne(() => User, (user) => user.dispens)
  @JoinColumn({ name: 'id_user' })
  user: User;
}