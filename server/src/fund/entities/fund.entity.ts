import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Fund {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  description: string;
  
  @Column()
  fundType: string;

  // @ManyToOne(() => User, (user) => user.id)
  // user: User;

  // @Column()
  // userId: number;
}
