import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Movie } from "./components/Movie"
import { Search } from "./components/Search"

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
  )
}

export default App
