export default interface News {
  status: string,
  totalResults: number,
  articles: Array<
    {
    source: {
      id: null,
      name: string
    },
    author: null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
    }>
}
