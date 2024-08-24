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

export interface Comments {
  id: string;
  newsId: string;
  author: string;
  text: string;
}

export interface CommentsMutation {
  newsId: string;
  author: string | null;
  text: string;
}

export interface NewsMutation {
  title: string;
  text: string;
  image: File | null;
}