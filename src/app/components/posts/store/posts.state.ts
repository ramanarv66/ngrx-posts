export class Post {
    id?: number;
    title?: string;
    body?: string;
}
// let initialState: Posts[]=[{id:12, title:'hi title', body:'hi body'}]

export interface PostsState{
    postList:Post[]
}

export const  initialState: PostsState = {
    postList:[{}],

} 
// let initialState: PostsState = {
//     posts: [{ id: '1', title: 'Sample title 1', description: 'Sample description 1' },
//     { id: '2', title: 'Sample title 2', description: 'Sample description 2' }]
// }