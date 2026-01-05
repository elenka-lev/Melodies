import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx';
import ChartsGallery from '../../components/ChartsGallery/ChartsGallery.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import Loading from '../../components/Loading/Loading.jsx';
import { useTopArtistsQuery } from '../../hooks/useArtistsQuery.js';
import { useChartsQuery } from '../../hooks/useChartsQuery.js';


const HomePage = () => {
  
  const { data: chartsData, isLoading: chartsLoading } = useChartsQuery();
  const { data: artistsData, isLoading: artistsLoading } = useTopArtistsQuery();
 
  if (chartsLoading || artistsLoading) {
    return <Loading />;
  }

  const tracks = chartsData || [];
  const artists = artistsData || [];

  

  return (
    <div>
      <Hero />
      <ChartsGallery tracks={tracks} />
      <ArtistsList artists={artists} />
    </div>
  )
}

export default HomePage