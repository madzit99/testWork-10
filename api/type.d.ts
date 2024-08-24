export interface News {
  id: number;
  title: string;
  text: string;
  image: string | null;
}

export type NewsWithoutId = Omit<News, "id">;



export interface Comments {
  id: number;
  newsId: number;
  author: string | null;
  text: string;
}

export type CommentsWithoutId = Omit<Comments, "id">;