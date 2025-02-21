import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailNotification } from 'src/Observer/email.notification';
import { NotificationSubject } from 'src/Observer/observer';
import { Repository } from 'typeorm';
import { CreateMenuItemDTO } from './dto/create-menu-item.dto';
import { UpdateMenuItemDTO } from './dto/update-menu-item.dto';
import { Menu_items } from './menu-item.entity';

@Injectable()
export class MenuItemsService {
  private notificationSubject: NotificationSubject;
  constructor(
    @InjectRepository(Menu_items)
    private readonly menuItemsRepository: Repository<Menu_items>,
  ) {
    this.notificationSubject = new NotificationSubject();
    const emailObserver = new EmailNotification();
    this.notificationSubject.addObserver(emailObserver);
  }

  async createMenuItem(
    createMenuItemDTO: CreateMenuItemDTO,
  ): Promise<Menu_items> {
    this.notificationSubject = new NotificationSubject();
    // const newItem = this.menuItemsRepository.create(createMenuItemDTO);
    return this.menuItemsRepository.save(createMenuItemDTO);
  }

  async findAll(): Promise<Menu_items[]> {
    return this.menuItemsRepository.find();
  }

  async findOne(id: number): Promise<Menu_items> {
    const item = await this.menuItemsRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    return item;
  }

  async updateMenuItem(
    id: number,
    updateMenuItemDTO: UpdateMenuItemDTO,
  ): Promise<Menu_items> {
    const item = await this.menuItemsRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }

    // Atualiza apenas os campos necessários
    Object.assign(item, updateMenuItemDTO);

    return await this.menuItemsRepository.save(item);
  }

  async updateAllToOutOfCar(): Promise<void> {
    const { affected } = await this.menuItemsRepository.update(
      { on_little_car: true },
      { on_little_car: false },
    );

    if (!affected) {
      throw new NotFoundException('Sem itens no carrinho');
    }
    this.notificationSubject.notifyObservers(
      'Seu pedido está sendo processado!',
    );
  }

  async remove(id: number): Promise<void> {
    console.log('salve pabl');
    const item = await this.menuItemsRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    await this.menuItemsRepository.delete(id);
  }
}
