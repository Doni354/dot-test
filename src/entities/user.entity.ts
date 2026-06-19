import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Dispen } from './dispen.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  pass: string;

  @Column({ nullable: true })
  kelas: string;

  @Column({ default: 'student' })
  role: string;

  @OneToMany(() => Dispen, (dispen) => dispen.user)
  dispens: Dispen[];
}