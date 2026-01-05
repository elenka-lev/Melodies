import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import ArtistsPage from './pages/ArtistsPage/ArtistsPage.jsx';
import AlbumTracksPage from './pages/AlbumTracksPage/AlbumTracksPage.jsx'
import DiscoveryPage from './pages/DiscoveryPage/DiscoveryPage.jsx'


const App = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="artists/:artistId" element={<ArtistsPage />} />
        <Route
          path="artists/:artistId/albums/:albumId"
          element={<AlbumTracksPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
