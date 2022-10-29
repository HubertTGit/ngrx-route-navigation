export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}

export interface BookState {
  books: ReadonlyArray<Book>;
  status: 'pending' | 'error' | 'success';
}
