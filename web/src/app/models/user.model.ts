export class User {
    public id!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public roles!: string[];
  
    constructor(id: string, username: string, roles: string[], password: string) {
      this.username = username
      this.password = this.password
      this.id = id
      this.roles = roles
      
    }
  }
  