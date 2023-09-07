import { useParams } from "react-router-dom";

export default function ShowData() {
  const params = useParams();
  const news = params.news;
  //   console.log(JSON.stringify(news));
  //   alert(data);

  return <div className="ShowData">{news}</div>;
}
