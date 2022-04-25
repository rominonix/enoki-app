export interface UserContextInterface {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (user: User) => Promise<boolean>;
  passwordReset: (email: string) => Promise<void>;
  getStorageData: () => void;
  logout: () => void
}

export interface User {
  id?: string;
  name: string;
  password: string;
  email: string;
  favorites?: string[];
}