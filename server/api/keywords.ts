import { Books, GenreMap } from "../../Books"

export default defineEventHandler((event) => {
  const { genre } = getQuery(event)
  if (genre == null) return [...new Set(Books.flatMap((book) => book.keywords))]

  const genreLabel = GenreMap[genre as keyof typeof GenreMap]
  if (genreLabel == null) return []

  return [...new Set(Books.filter((book) => book.tags.includes(genreLabel)).flatMap((book) => book.keywords))]
})
