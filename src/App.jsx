import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import ArtistsPage from './pages/ArtistsPage/ArtistsPage.jsx';


const App = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/artists" element={<ArtistsPage/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
