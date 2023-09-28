/* eslint-disable react/jsx-no-target-blank */

import './App.css'
import Navbar from './Navbar/Navbar'
import Developers from './Developers/ApiDevelopers'
import Tags from './Tags/ApiTags'
import Game from './Game/Game'
import NotFound from './NotFound/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ApiGames from './Games/ApiGames'
import Search from './Search/Search'





function App() {


  return (

    <Router>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<ApiGames />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/detailgame/:id" element={<Game />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
