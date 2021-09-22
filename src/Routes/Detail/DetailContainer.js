import { moviesApi, tvApi } from "api";
import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const history = useHistory(); // {location: {pathname: "/movie/848278"}}
  const location = useLocation(); // {pathname: "/movie/848278"}
  const params = useParams(); // {id: '848278'}
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie, setIsMovie] = useState(location.pathname.includes("/movie/"));

  // console.log(history, location, params);

  const getMovieOrTvDetail = async (id) => {
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(id);
        result = request.data;
        // console.log(result);
        setResult(result);
      } else {
        const request = await tvApi.showDetail(id);
        result = request.data;
        // console.log(result);
        setResult(result);
      }
    } catch {
      // console.log("error occur!");
      setError("Can't find anything.");
    } finally {
      setLoading(false);
      // setResult(result)
    }
  };

  useEffect(() => {
    if (isNaN(Number(params.id)) === false) {
      // number 인 경우
      const getParsedId = Number(params.id);
      getMovieOrTvDetail(getParsedId);
    } else {
      // number 가 아님. 즉 잘못된 url 요청
      // alert('올바르지 않은 요청')
      // 리다이렉트, 어디로?
      history.push("/");
      // console.log("now steal alive"); // history.push("/") 로 인해 실행되지 않음
    }
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};
export default DetailContainer;
