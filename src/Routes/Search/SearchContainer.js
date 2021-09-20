import { moviesApi, tvApi } from "api";
import { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const handleSubmit = () => {
      if (searchTerm !== "") {
        searchByTerm();
      }
    };

  const searchByTerm = async () => {
    setSearchTerm(true);
    try {
      const {
        data: { results: getMovieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: getTvResults },
      } = await tvApi.search(searchTerm);
    } catch {
        setError("Can't find results")
    } finally {
        setLoading(false)
    }
  };
//   useEffect(() => {
//     searchByTerm();
//   }, []);

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
