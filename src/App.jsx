import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, errors } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })
  const handleSubmit = (event) => {
    event.preventDefault()
    /* otra manera:
    const inputEl = inputRef.current ==> registra la referencia del elemento
    const value = inputEl.value ==> recupera el valor del imputEl */
    getMovies()
  }
  const handleOnChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            placeholder='Batman, Iron Man, Matrix... '
            name='search'
            onChange={handleOnChange}
            value={search}
            style={{
              border: '1px solid transparent',
              borderColor: errors ? 'red' : 'transparent'
            }}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
      </header>
      <main>
        {loading
          ? <p>Cargando...</p>
          : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
