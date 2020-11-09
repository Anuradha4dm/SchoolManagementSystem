export class NotificationModel {
  public notificationid: string;
  public from: string;
  public to: string;

  public description: string;
  public time: string;
  public publisher: string;

  constructor(
    notid: string,
    publisher: string,
    from: string,
    to: string,

    description: string,
    time: string
  ) {
    this.notificationid = notid;
    this.from = from;
    this.to = to;

    this.description = description;
    this.time = time;
    this.publisher = publisher;
  }
}
