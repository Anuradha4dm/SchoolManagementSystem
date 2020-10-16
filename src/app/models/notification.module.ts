import { Data } from '@angular/router';

export class NotificationModel {
  public from: string;
  public to: string;
  public message: string;
  public description: string;
  public time: string;
  public _id: string;

  constructor(
    _id: string,
    from: string,
    to: string,
    message: string,
    description: string,
    time: string
  ) {
    this.from = from;
    this.to = to;
    this.message = message;
    this.description = description;
    this.time = time;
    this._id = _id;
  }
}
