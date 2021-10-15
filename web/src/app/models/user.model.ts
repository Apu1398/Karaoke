export class User {
    public id!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public roles!: string[];
    public accessToken!: string;
  
    constructor(id: string, username: string, roles: string[], password: string, accessToken: string) {
      this.username = username
      this.password = this.password
      this.id = id
      this.roles = roles
      this.accessToken = accessToken;
      
    }
  }
  