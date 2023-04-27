export interface Login {
  email: string;
  password: string;
}

export interface User extends Login {
  firstName: string;
  lastName: string;
  country: string;
  role: string;
  id: number;
}
