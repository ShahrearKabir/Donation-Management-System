import { Fund } from '../../fund/entities/fund.entity';
import { User } from '../..//user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Fund, (fund) => fund.id)
  fund: Fund;

  // @Column()
  // userId: number;
}
