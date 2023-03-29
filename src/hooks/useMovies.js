import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    // Para evitar que se renderice otra vez el componente cuando haces la misma búsqueda
    if (search === previousSearch.current) return
    /* Si hay "search" entonces tendremos que actualiar la respuesta/estado de la petición a la API */
    try {
      setLoading(true)
      const newMovies = await searchMovies({ search })
      previousSearch.current = search
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  /* Si existe "sort", hace la funcion sort para ordenar las peliculas por título
     renderizando una copia del array original.

       const getSortedMovies = () => {
       const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
       return sortedMovies
      }

     PERO PARA EVITAR QUE SE RENDERICE CADA VEZ QUE CAMBIA EL IMPUT DEBEMOS USAR EL "useMemo"

     NOTA: No abusar del useMemo, usar para evitar renderizados con muchos elementos */

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return ({ movies: sortedMovies, getMovies, loading, error })
}
