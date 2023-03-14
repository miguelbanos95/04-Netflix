import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputValue = inputRef.current.value
    /* otra manera:
    const inputEl = inputRef.current ==> registra la referencia del elemento
    const value = inputEl.value ==> recupera el valor del imputEl */
    console.log(inputValue)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Batman, Iron Man, Matrix... ' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
