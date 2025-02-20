import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu_items')
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
<<<<<<< HEAD

  @Column()
  on_little_car: boolean;
=======
>>>>>>> 3ae6c8a5ea228b04defe1a83f94bcec1ce5f2045
}
