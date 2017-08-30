export enum NotificationType {
  INFO = 1,
  SUCCESS = 2,
  WARNING = 3,
  ERROR = 4
}

export class Notification {
  id: number;
  nt: number;
  title: string;
  isNew: boolean;

  constructor(id: number, nt: number, title: string){
    this.id = id;
    this.nt = nt;
    this.title = title;
    this.isNew = true;
  }
}
