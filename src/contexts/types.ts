export interface UserContextInterface {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (user: User) => Promise<boolean>;
  passwordReset: (email: string) => Promise<void>;
  getStorageData: () => void;
  logout: () => void;
  titleAndDescription: (title: string, description:string, image: object) => void;
  newImage: (image: object) => void
}

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  favorites?: string[];
}
