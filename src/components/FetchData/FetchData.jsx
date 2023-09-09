import { useEffect, useState } from "react";
import "./FetchData.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchData({ cat }) {
  const [data, setData] = useState([]);
  const apiKey = "78aaa119be39428bb65589ec875a9ea7";

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const cURL = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${apiKey}`;

  console.log(data);

  const getData = async () => {
    const response = await fetch(cat ? cURL : url);
    // cat ? (response = await fetch(cURL)) : (response = await fetch(url));

    const da = await response.json();
    setData(da.articles);
    // console.log(da.articles[0]);
  };

  useEffect(() => {
    getData();
  }, [cat]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       setData(responseData.articles);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching news:", error);
  //     });
  // }, [cat]);

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

        {data.map((article, index) => {
          return (
            <a
              href={article.url}
              className="newsArticles"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div key={index} className="headlineContents">
                {/* {article} */}
                <img src={article.urlToImage} alt="image not available" className="newsImg" />
                <div className="contentText">
                  <h5>
                    {/* {article.title} */}
                    {article.title.split("-")[0]}

                    {/* {console.log(JSON.stringify(d))}
                  {/* <Link to={`/ShowData/${index}`}>{article.title}</Link> */}
                  </h5>
                  <p className="articleDescrition  ">{article.description}</p>
                  <p className="articleAuther ArtContents">BY {article.author}</p>
                  <p className="articleSource ArtContents"> Source{article.title.split("-")[1]}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return data.length > 0 ? loaded() : loading();
}
