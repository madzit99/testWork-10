export interface News {
  id: string;
  title: string;
  image: string | null;
  date: Date;
}

export interface FullNewsInterface {
  id: string;
  title: string;
  image: string | null;
  date: Date;
  text: string;
}
