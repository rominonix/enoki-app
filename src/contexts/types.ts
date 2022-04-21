export interface UserContextInterface {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (user: User) => Promise<boolean>;
  passwordReset: (email: string) => Promise<void>;
  getStorageData: () => void;


}

export interface User {
  id?: string;
  name: string;
  password: string;
  email: string;
  favorites?: string[];
}