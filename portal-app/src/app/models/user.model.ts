import {Festival} from './festival.model';

export class User {

  id: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  birthDate: Date;
  festivals: Array<Festival>;
  roles: Array<string>;
}
