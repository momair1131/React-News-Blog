import { useParams } from "react-router-dom";

export default function ShowData({ data }) {
  // console.log(data);
  const { index } = useParams();

  const articleIndex = parseInt(index);
  // const article = data[articleIndex];
  // console.log(article);
  const article = data && data.length > articleIndex ? data[articleIndex] : null;

  return <div className="ShowData">{article}</div>;
}
