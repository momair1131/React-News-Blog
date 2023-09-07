import { useEffect, useState } from "react";
import "./FetchData.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchData({ cat }) {
  const [data, setData] = useState("");
  const apiKey = "78aaa119be39428bb65589ec875a9ea7";

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const cURL = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${apiKey}`;

  console.log(data.articles);

  let response = "";
  const getData = async () => {
    cat ? (response = await fetch(cURL)) : (response = await fetch(url));

    const da = await response.json();
    setData(da);
    // console.log(da.articles[0]);
  };

  useEffect(() => {
    getData();
  }, [cat]);
  //   return (
  //     <div className="FetchData">
  //       <h2>TOP HEADLINES</h2>
  //       <div className="data">{data ? "done" : "LOADING..."}</div>
  //     </div>
  //   );
  const loaded = () => {
    return (
      <div className="FetchData">
        {cat ? <h2>{cat} </h2> : <h2>TOP HEADLINES</h2>}

        {data.articles.map((d, i) => {
          return (
            <div className="headlineContents">
              {/* {i} */}
              <img src={d.urlToImage} alt="image not available" className="newsImg" />
              <div className="contentText">
                <h5>
                  {/* <a href={d.url} target="blank">
                    {d.title}

                  </a> */}
                  {/* {console.log(JSON.stringify(d))} */}
                  <Link to={`/ShowData/${d}`}>{d.title}</Link>
                </h5>
                <p>{d.source.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return data && data.articles ? loaded() : loading();
}
