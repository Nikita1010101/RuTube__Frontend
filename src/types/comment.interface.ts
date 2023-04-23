export interface IComment {
  id: string 
  videoId: string
  time: string 
  comments: {
    userId: string 
    author: string 
    content: string
  }
}