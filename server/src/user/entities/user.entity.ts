import { Role } from '../../role/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @Column({ default: 0 })
  donations: number;
}
