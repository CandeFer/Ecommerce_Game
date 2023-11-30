/* eslint-disable react/jsx-no-target-blank */

import './App.css'
import Developers from './Developers/ApiDevelopers'
import Tags from './Tags/ApiTags'
import Game from './Game/Game'
import NotFound from './NotFound/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ApiGames from './Games/ApiGames'
import Search from './Search/Search'
import LoginPage from './Login/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApiGames />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/detailgame/:id" element={<Game />} />{/** detail-game/:id */}
        <Route path="/Search" element={<Search />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
