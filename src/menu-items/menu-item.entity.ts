import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu_items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'imageUrl' })
  imageUrl: string;

  @Column({ name: 'on_little_car' })
  on_little_car: boolean;
}
