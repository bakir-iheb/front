export class User {
    constructor(
      public _id : string,
      public name: string ,
      public lastname: string ,
      public email: string,
      public password: string,
      public role: string = "user" ,
      public createdAt?: Date,
      public updatedAt?: Date
    ) {}


  }
  