import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    /* Si hay "search" entonces tendremos que actualiar la respuesta/estado de la petición a la API */
    try {
      setLoading(true)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
    console.log(error)
  }
  return ({ movies, getMovies, loading })
}
