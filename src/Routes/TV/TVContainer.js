import { tvApi } from "api";
import { useEffect, useState } from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
 
    const getDatas = async () => {
      try {
        const {
          data: { results: getTopRated },
        } = await tvApi.topRated();
        const {
          data: { results: getPopular },
        } = await tvApi.popular();
        const {
          data: { results: getAiringToday },
        } = await tvApi.airingToday();
        setTopRated(getTopRated);
        setPopular(getPopular);
        setAiringToday(getAiringToday);
      } catch {
          setError("Can't find TV info.")
      } finally {
          setLoading(false)
      }
    };
    getDatas();
  }, []);

  return (
    <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} loading={loading} error={error} />
  );
};

export default TVContainer;
