import withResult from '../mocks/with-result.json'
// import withoutResult from '../mocks/no-results.json'

export function useMovies () {
  const movies = withResult.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    poster: movie.Poster,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year
  }))
  return ({ movies: mappedMovies })
}
