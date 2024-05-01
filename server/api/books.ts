import { Books, GenreMap } from "../../Books"

function bookToResponseBook(book: (typeof Books)[number]) {
  return {
    isbn: book.isbnMinumsa,
    imageUrl: book.imageUrlYes24,
    title: book.title,
    author: book.authors,
    description: book.description,
    storeUrl: book.itemUrlYes24,
  }
}

export default defineEventHandler((event) => {
  const { searchType, isbn, genre, keyword } = getQuery(event)

  if (searchType === "isbns") {
    const isbns = Array.isArray(isbn) ? isbn : [isbn]
    const filtered = Books.filter((book) => isbns.includes(book.isbnYes24))

    return filtered.map(bookToResponseBook).slice(0, 5)
  }
  if (searchType === "genreAndKeywords") {
    const keywords = Array.isArray(keyword) ? keyword : [keyword]
    const filtered = Books.filter((book) => {
      const hasGenre = book.tags.includes(GenreMap[genre as keyof typeof GenreMap])
      const hasKeyword = book.keywords.some((k) => keywords.includes(k))

      return hasGenre && hasKeyword
    })

    const getScore = (keyword: string, index: number) => {
      const k = keywords.includes(keyword) ? 1 : 0
      const w = Math.max(10 - index, 0)
      return k * w
    }

    filtered.sort((a, b) => {
      const aScore = a.keywords.map(getScore).reduce((acc, cur) => acc + cur, 0)
      const bScore = b.keywords.map(getScore).reduce((acc, cur) => acc + cur, 0)

      return bScore - aScore
    })

    return filtered.map(bookToResponseBook)
  }

  return []
})
