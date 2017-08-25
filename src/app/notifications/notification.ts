export enum NotificationType {
  INFO = 1,
  SUCCESS = 2,
  WARNING = 3,
  ERROR = 4
}

export class Notification {
  id: number;
  nt: NotificationType;
  title: string;
  isNew: boolean;

  constructor(nt: number, title: string){
    this.title = title;
    this.nt = nt;
    this.isNew = true;
  }
}
