export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  owner?: string;
  name: string;
  distance: number;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  name: string;
  adopt: number
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

// export type DataT = {
//   id: number;
//   name: string;
//   isOnline: boolean;
//   match: string;
//   description: string;
//   message: string;
//   image: any;
//   age?: string;
//   info1?: string;
//   info2?: string;
//   info3?: string;
//   info4?: string;
//   location?: string;
// };

export type Animal = {
    id: number;
    name: string;
    type: string;
    ownerId: number;
    description: string;
    message: string;
    image: any;
    distance: number;
    age?: string;
    info1?: string;
    info2?: string;
    info3?: string;
    info4?: string;
    location?: string;

  };

  export type Owner = {
    id: number;
    name: string;
    image: any;
    location?: string;
  };

  export type User = {
    id: number;
    name: string;
    description: string;
    message: string;
    image: any;
    age?: string;
    info1?: string;
    info2?: string;
    info3?: string;
    info4?: string;
    location?: string;
    adopt:number;
  };