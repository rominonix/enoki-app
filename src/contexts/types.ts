// import Album from "../screens/Album";
import { getRandom } from './api';
export interface UserContextInterface {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (user: User) => Promise<boolean>;
  passwordReset: (email: string) => Promise<void>;
  getStorageData: () => void;
  logout: () => void;
  titleAndDescription: (
    title: string,
    description: string,
    image: object
  ) => void;
  getAlbums: () => void;
  getRandomMushroom: () => void;
  mushrooms: Mushroom[] | null;
  randomMushroom: RandomMushroom | null
}

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  favorites?: string[];
}

export interface Mushroom extends Database {
  mushroom: [
    id: string,
    title: string,
    description: string,
    image: string[],
    userId: User
  ];
}

export interface RandomMushroom extends RandomMushroomsData {
  randomMushroom: {

    scientificName: string,
    id: string,
    description: string,
    ecologicalGroup: string,
    image: string,
    swedishName: string,
    biotope: string,
    imageAuthor: string,
    url: string,
    firebaseUrl: string
  }
  
}

export interface Database {
  _fieldsProto: {
    id: {
      stringValue: string;
      valueType: string;
    };
    images: {
      arrayValue: {
        values: [
          {
            stringValue: string;
            valueType: string;
            urlValue: string;
          }
        ];
      };
      valueType: object;
    };

    userId: {
      stringValue: string;
      valueType: string;
    };

    title: {
      stringValue: string;
      valueType: string;
    };

    description: {
      stringValue: string;
      valueType: string;
    };
  };
  
}

export interface Album {
  album: [Mushroom];
}

export interface RandomMushroomsData {
  _fieldsProto: {
    scientificName: {
      stringValue: string;
      valueType: string;
    };
    id: {
      stringValue: string;
      valueType: string;
    };
    description: {
      stringValue: string;
      valueType: string;
    };
    ecologicalGroup: {
      stringValue: string;
      valueType: string;
    };
    image: {
      stringValue: string;
      valueType: string;
    };
    swedishName: {
      stringValue: string;
      valueType: string;
    };
    biotope: {
      stringValue: string;
      valueType: string;
    };

    imageAuthor: {
      stringValue: string;
      valueType: string;
    };

    url: {
      stringValue: string;
      valueType: string;
    };
  };
  firebaseUrl: string
}
