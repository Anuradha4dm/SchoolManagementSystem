export class NotificationModel {
  public notificationid: string;
  public from: string;
  public to: string;
  public title: string;
  public description: string;
  public time: string;
  public publisher: string;
  public attachmentpath: string;

  constructor(
    notid: string,
    publisher: string,
    from: string,
    to: string,
    title: string,
    description: string,
    time: string,
    attachement: string
  ) {
    this.notificationid = notid;
    this.from = from;
    this.to = to;
    this.title = title;
    this.description = description;
    this.time = time;
    this.publisher = publisher;
    this.attachmentpath = attachement;
  }
}
