import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import ArtistsPage from './pages/ArtistsPage/ArtistsPage.jsx';
import AlbumTracksPage from './pages/AlbumTracksPage/AlbumTracksPage.jsx'
import DiscoveryPage from './pages/DiscoveryPage/DiscoveryPage.jsx'
import { useAuth } from './context/AuthContext.jsx'
import { useQuery } from '@tanstack/react-query'
import { getFavorites } from './api/authApi.js'
import FavoriteMusic from './pages/FavoriteMusic/FavoriteMusic.jsx'


const App = () => {
  const { isLoggedIn } = useAuth();
  const { data: favoriteIds } = useQuery({
    queryKey: ['favorites'], 
    queryFn: getFavorites,
    enabled: isLoggedIn,
    staleTime: Infinity, 
  });

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
        {isLoggedIn && <Route path="/favorite" element={<FavoriteMusic />} />}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
