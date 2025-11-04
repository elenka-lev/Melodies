import ArtistsList from "../../components/ArtistsList/ArtistsList.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import Search from "../../components/Search/Search.jsx"
import { useTopArtistsQuery } from "../../hooks/useArtistsQuery.js";
import s from './ArtistsPage.module.css'

const ArtistsPage = () => {
  const { data: artistsData, isLoading: artistsLoading } = useTopArtistsQuery();
   
    if (artistsLoading) {
      return <Loading />;
  }
  const artists = artistsData || [];

  return (
    <section className={s.artist}>
      <Search />
      <Banner artists={artists} />
      <ArtistsList artists={artists} />
    </section>
  );
};

export default ArtistsPage;