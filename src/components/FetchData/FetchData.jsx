import { useEffect, useState } from "react";
import "./FetchData.css";

export default function FetchData({ cat }) {
  const [data, setData] = useState([]);
  const apiKey = "78aaa119be39428bb65589ec875a9ea7";

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const cURL = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${apiKey}`;

  // console.log(data);

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

  const loaded = () => {
    return (
      <div className="FetchData">
        {cat ? <h2>{cat} </h2> : <h2>TOP HEADLINES</h2>}

        <div className="NewsBlogs">
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
                    <h5>{article.title.split("-")[0]}</h5>
                    <p className="articleDescrition  ">{article.description}</p>
                    <p className="articleAuther ArtContents">BY {article.author}</p>
                    <p className="articleSource ArtContents">
                      {" "}
                      Source {article.title.split("-")[1]}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <h1 className="LoadingContents">
        <img src="../../../public/Loading.gif" />
      </h1>
    );
  };

  return data.length > 0 ? loaded() : loading();
}