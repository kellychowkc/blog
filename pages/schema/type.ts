export interface Article {
  id: number;
  deleted?: boolean;
  type?: string;
  by?: string;
  time?: number;
  dead?: boolean;
  kids?: [number];
  descendants?: number;
  score?: number;
  title: string;
  url: string;
  image?: string | any | null;
  description?: string;
  new?: Boolean;
}

export type Appinput = {
  Component: any;
  pageProps?: any;
};

export type TabitemInput = {
  text: string;
  href?: string;
  active: Boolean;
};

export type Post = {
  ogTitle?: string;
  ogImage?: any;
  ogDescription?: any;
};

export type NavitemInput = {
  text: string;
  href?: string;
  subtext?: string;
  active: Boolean;
};
