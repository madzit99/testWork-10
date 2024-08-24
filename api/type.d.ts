export interface News {
  id: number;
  title: string;
  text: string;
  image: string | null;
}

export type NewsWithoutId = Omit<News, "id">;
