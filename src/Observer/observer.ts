export interface Observer {
  update(message: string): void;
}

export class NotificationSubject {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(message: string) {
    for (let observer of this.observers) {
      observer.update(message);
    }
  }
}
