import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Movie } from "./pages/Movie"
import { Search } from "./pages/Search"
import { Navbar } from "./components/NavBar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App
