export class LogInUserModel {
  private loginUserid: string;
  private authentication: boolean;
  private logInAs: string;
  private token: string;
  private expirationData: number;

  constructor(
    loginuserid: string,
    authentication: boolean,
    loginas: string,
    token: string,
    expirationdate: number
  ) {
    this.loginUserid = loginuserid;
    this.authentication = authentication;
    this.token = token;
    (this.logInAs = loginas), (this.expirationData = expirationdate);
  }

  get getUserId() {
    return this.loginUserid;
  }

  get role() {
    return this.logInAs;
  }

  get getToken() {
    if (!this.token || this.expirationData < new Date().getTime()) {
      return null;
    }
    return null;
  }

  get getAuthentication() {
    return this.authentication;
  }

  get getLoginAs() {
    return this.logInAs;
  }
}
