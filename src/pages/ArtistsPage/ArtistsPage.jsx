import { useEffect, useState } from 'react';
import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import Search from '../../components/Search/Search.jsx';
import {
  useArtistAlbumsQuery,
  useTopArtistsQuery,
} from '../../hooks/useArtistsQuery.js';
import { useSearchQuery } from '../../hooks/useSearchQuery.js';
import s from './ArtistsPage.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const ArtistsPage = () => {
   const { openModal, isLoggedIn } = useAuth();
  const [query, setQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);

  const { data: artistsData, isLoading: artistsLoading } = useTopArtistsQuery();
  const { data: searchData, isLoading: searchLoading } = useSearchQuery(
    query,
    'artist'
  );
  const navigate = useNavigate();
  const location = useLocation();
  const paramArtistId = useParams().artistId;

  const handleArtistClick = artist => {
    setQuery('');
    setSelectedArtist(artist);
    navigate(`/artists/${artist.id}`, { replace: false });
  };

  const handleAlbumClick = album => {
    const realArtistId = selectedArtist?.id || paramArtistId;
    if (!realArtistId) {
      
      navigate(`/artists/${album.artist?.id || album.id}/albums/${album.id}`);
      return;
    }
    navigate(`/artists/${realArtistId}/albums/${album.id}`);
  };

  useEffect(() => {
    if (paramArtistId) {
      setQuery('');
      if (!selectedArtist && artistsData?.length) {
        const found = artistsData.find(
          a => String(a.id) === String(paramArtistId)
        );
        if (found) setSelectedArtist(found);
      }
    }
  }, [paramArtistId, artistsData]);

 

  useEffect(() => {
    if (query && selectedArtist) {
     
      setSelectedArtist(null);
     
      if (paramArtistId) navigate("/artists", { replace: false });
    }
    
  }, [query]);

   useEffect(() => {
     if (location.pathname === '/artists') {
      
       if (selectedArtist || query) {
         setSelectedArtist(null);
         setQuery('');
       }
     }
     
   }, [location.pathname]);

  const isSearching = !!query;
  const artistId =
    selectedArtist?.id ||
    (isSearching && searchData?.data?.length ? searchData.data[0].id : null);

  const bannerArtists = selectedArtist
    ? [selectedArtist]
    : isSearching
    ? searchData?.data?.length
      ? [searchData.data[0]]
      : []
    : artistsData || [];

  const { data: albumsData, isLoading: albumsLoading } =
    useArtistAlbumsQuery(artistId);

  let artists;
  let type;
  
  if (selectedArtist) {
    artists = albumsData || [];
    type = 'album';
  } else if (isSearching) {
    artists = albumsData || [];
    type = 'album';
  } else {
    artists = artistsData || [];
    type = 'artist';
  }
  if (artistsLoading || searchLoading || albumsLoading) {
    return <Loading />;
  }

  return (
    <section className={s.artist}>
      <div className={s.headerWrap}>
        <Search value={query} onSearch={setQuery} />
        {!isLoggedIn && (
          <div className={s.btnWrap}>
            <Button
              className={s.btn}
              variant="login"
              onClick={() => openModal('login')}
            >
              Login
            </Button>
            <Button
              className={s.btn}
              onClick={() => openModal('signup')}
              variant="sign"
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>

      <Banner artists={bannerArtists} isSearching={isSearching} />
      <ArtistsList
        artists={artists}
        type={type}
        onArtistClick={handleArtistClick}
        onAlbumClick={handleAlbumClick}
        artistId={artistId}
      />
    </section>
  );
};

export default ArtistsPage;
