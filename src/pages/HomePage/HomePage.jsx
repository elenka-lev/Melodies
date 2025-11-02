import ChartsGallery from '../../components/ChartsGallery/ChartsGallery.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import Loading from '../../components/Loading/Loading.jsx';
import { useChartsQuery } from '../../hooks/useChartsQuery.js';


const HomePage = () => {
  const { data, isLoading} = useChartsQuery();
 
  if (isLoading) {
    return <Loading/>
  }

  const tracks = data || [];
  console.log(data);
  console.log(tracks);
  return (
    <div>
      <Hero />
      <ChartsGallery tracks={tracks } />
    </div>
  )
}

export default HomePage