import { Observer } from './observer';

export class EmailNotification implements Observer {
  update(message: string) {
    console.log(`Enviando e-mail: ${message}`);
  }
}
