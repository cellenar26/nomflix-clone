import { moviesApi } from "api";
import { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = ({props}) => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const {
          data: { results: getNowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: getUpcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: getPopular },
        } = await moviesApi.popular();
        
        setNowPlaying(getNowPlaying);
        setUpcoming(getUpcoming);
        setPopular(getPopular);
      } catch {
        setError("Can't find movie info.");
      } finally {
        setLoading(false);
      }
    };
    getDatas();
  }, []);

  return (
    <>
      <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
    </>
  );
};

export default HomeContainer;
