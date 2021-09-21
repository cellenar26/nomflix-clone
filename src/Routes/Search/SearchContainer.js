import { moviesApi, tvApi } from "api";
import { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      if (searchTerm !== "") {
        searchByTerm();
      }
    };

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: getMovieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: getTvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(getMovieResults)
      setTvResults(getTvResults)


    } catch {
        setError("Can't find results")
    } finally {
        setLoading(false)
    }
  };
//   useEffect(() => {
//     searchByTerm();
//   }, []);
  const updateTerm = (event) => {
    const {target : {value}} = event
    setSearchTerm(value)
    
  }

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
