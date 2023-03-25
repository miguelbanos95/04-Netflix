const API_KEY = 'c5ffc996'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    /* Hacemos la petición a la API y lo mapeamos aquí mejor que en hook */
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year
    }))
    return mappedMovies
  } catch (e) {
    throw new Error('Error serching movies')
  }
}
