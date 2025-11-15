import { useState } from "react";
import ArtistsList from "../../components/ArtistsList/ArtistsList.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import Search from "../../components/Search/Search.jsx"
import { useArtistAlbumsQuery, useTopArtistsQuery } from "../../hooks/useArtistsQuery.js";
import { useSearchQuery } from "../../hooks/useSearchQuery.js";
import s from './ArtistsPage.module.css'

const ArtistsPage = () => {
   const [query, setQuery] = useState('');

   const { data: artistsData, isLoading: artistsLoading } =
     useTopArtistsQuery();
   const { data: searchData, isLoading: searchLoading } = useSearchQuery(
     query,
     'artist'
   );

  const isSearching = !!query;
   
    const bannerArtists = isSearching
      ? searchData?.data?.length
        ? [searchData.data[0]]
        : []
      : artistsData || [];

    // id артиста для запроса альбомов
    const artistId =
      isSearching && searchData?.data?.length ? searchData.data[0].id : null;
    const { data: albumsData, isLoading: albumsLoading } =
      useArtistAlbumsQuery(artistId);

    // список для ArtistsList
    const artists = isSearching ? albumsData || [] : artistsData || [];
    const type = isSearching ? 'album' : 'artist';

    if (artistsLoading || searchLoading || albumsLoading) {
      return <Loading />;
    }

  return (
    <section className={s.artist}>
      <Search value={query} onSearch={setQuery} />
      <Banner artists={bannerArtists} isSearching={isSearching} />
      <ArtistsList artists={artists} type={type} />
    </section>
  );
};

export default ArtistsPage;