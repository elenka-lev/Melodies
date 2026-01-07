import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx';
import ChartsGallery from '../../components/ChartsGallery/ChartsGallery.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import Loading from '../../components/Loading/Loading.jsx';
import { useTopArtistsQuery } from '../../hooks/useArtistsQuery.js';
import { useChartsQuery } from '../../hooks/useChartsQuery.js';
import { useSearchQuery } from '../../hooks/useSearchQuery.js';
import s from './HomePage.module.css'
import AlbumsTrackList from '../../components/AlbumsTrackList/AlbumsTrackList.jsx';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  
  const handleSearch = newQuery => {
    setSearchParams({ search: newQuery });
  };
  const { data: searchData, isLoading: searchLoading } = useSearchQuery(
    query,
    'track'
  );
  const { data: chartsData, isLoading: chartsLoading } = useChartsQuery();
  const { data: artistsData, isLoading: artistsLoading } = useTopArtistsQuery();
 
  if (chartsLoading || artistsLoading) {
    return <Loading />;
  }

  const tracks = chartsData || [];
  const artists = artistsData || [];

  

  return (
    <section>
      <Hero onSearch={handleSearch} />
      <ChartsGallery tracks={tracks} />
      <ArtistsList artists={artists} />
      {query && (
        <section className={s.wrap}>
          <div className={s.container}>
            <h2 className={s.title}>I want to <span>listen...</span></h2>
            {searchLoading ? (
              <Loading />
            ) : (
              <AlbumsTrackList tracks={searchData?.data} />
            )}
          </div>
        </section>
      )}
    </section>
  );
}

export default HomePage