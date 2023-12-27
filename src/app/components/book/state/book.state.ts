export interface Book {
    id: number;
    subject: string;
    pages: number;
    author: string;
}
export const initialState: Book[] = [{ id: 21, subject: 'Java', pages: 1200, author: 'Ram' }]