import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MenuItem')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @Column()
  on_little_car: boolean;
}
