import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const history = useHistory(); // {location: {pathname: "/movie/848278"}}
  const location = useLocation(); // {pathname: "/movie/848278"}
  const params = useParams(); // {id: '848278'}
  console.log(history, location, params);


  
//   console.log(isNaN(Number(getId)));
  console.log(isNaN(Number(13)));
  console.log(isNaN(Number("12#4")));


  useEffect(() => {
    if (isNaN(Number(params.id)) === false) {
      // number 인 경우 
      const getParsedId = Number(params.id)
  }
  else {
    // number 가 아님. 즉 잘못된 url 요청
    // alert('올바르지 않은 요청')
    // 리다이렉트, 어디로?
    history.push("/")
    console.log('now steal alive');
  }
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};
export default DetailContainer;
