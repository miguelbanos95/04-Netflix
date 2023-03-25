import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [errors, setErrors] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    /* Comprobamos si se renderiza por primera vez el componente con useRef
    y evitamos que valide al principio y cuando refrescas la página */
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    // Usamos el useEffect para hacer validaciones
    if (search === '') {
      setErrors('No se pueden buscar películas vacías')
      return
    }
    if (search.length < 3) {
      setErrors('La búsqueda debe contener al menos 3 carácteres')
      return
    }
    setErrors(null)
  }, [search])
  return { search, setSearch, errors }
}
