import React from 'react'

export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <h3>{movie.year}</h3>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}
export function NoMovieResult () {
  return (
    <p>No se han encontrado películas para esta búsqueda</p>
  )
}
export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovieResult />
  )
}
