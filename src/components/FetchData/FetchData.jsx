// import { useEffect, useState } from "react";
// import "./FetchData.css";

// export default function FetchData({ cat }) {
//   const [data, setData] = useState([]);
//   const apiKey = "78aaa119be39428bb65589ec875a9ea7";

//   const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
//   const cURL = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${apiKey}`;

//   console.log(data);

//   const getData = async () => {
//     const response = await fetch(cat ? cURL : url);
//     // cat ? (response = await fetch(cURL)) : (response = await fetch(url));

//     const da = await response.json();
//     setData(da.articles);
//     // console.log(da.articles[0]);
//   };

//   useEffect(() => {
//     getData();
//   }, [cat]);

//   const loaded = () => {
//     return (
//       <div className="FetchData">
//         {cat ? <h2>{cat} </h2> : <h2>TOP HEADLINES</h2>}

//         <div className="NewsBlogs">
//           {data.map((article, index) => {
//             return (
//               <a
//                 href={article.url}
//                 className="newsArticles"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 <div key={index} className="headlineContents">
//                   {/* {article} */}
//                   <img src={article?.urlToImage} alt="image not available" className="newsImg" />
//                   <div className="contentText">
//                     <h5>{article?.title.split("-")[0]}</h5>
//                     <p className="articleDescrition  ">{article?.description}</p>
//                     <p className="articleAuther ArtContents">BY {article?.author}</p>
//                     <p className="articleSource ArtContents">
//                       {" "}
//                       Source {article.title.split("-")[1]}
//                     </p>
//                   </div>
//                 </div>
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const loading = () => {
//     return (
//       <h1 className="LoadingContents">
//         {/* React-News-Blog\public\Loading.gif */}

//         {/* <img src="./dist/Loading.gif" /> */}
//         <img src="./public/Loading.gif" />
//         {/* <img src="../../../public/Loading.gif" /> */}
//         {/* <img src="./dis/Loading.gif" /> */}
//       </h1>
//     );
//   };

//   return data.length > 0 ? loaded() : loading();
// }

//////////////////GNEWS API////////////////////

import React, { useEffect, useState } from "react";
import "./FetchData.css";

export default function FetchData({ cat }) {
  const [data, setData] = useState([]);
  const apiKey = "c51887dac5a323bff27b569103a1e74e"; // Replace with your GNews API key

  const url = `https://gnews.io/api/v4/top-headlines?country=us&apikey=${apiKey}`;
  const cURL = `https://gnews.io/api/v4/top-headlines?country=us&topic=${cat}&apikey=${apiKey}`;

  console.log(data);
  const getData = async () => {
    try {
      const response = await fetch(cat ? cURL : url);

      if (response.ok) {
        const result = await response.json();
        setData(result.articles);
      } else {
        console.error("Failed to fetch data from GNews API");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [cat]);

  const loaded = () => {
    return (
      <div className="FetchData">
        {cat ? <h2>{cat}</h2> : <h2>TOP HEADLINES</h2>}

        <div className="NewsBlogs">
          {data.map((article, index) => (
            <a
              href={article.url}
              className="newsArticles"
              rel="noopener noreferrer"
              target="_blank"
              key={index}
            >
              <div className="headlineContents">
                <img src={article.image} alt="Image not available" className="newsImg" />
                <div className="contentText">
                  <h5>{article.title}</h5>
                  <p className="articleDescription">{article.description}</p>
                  <p className="articleAuthor ArtContents">By {article.source.name}</p>
                  <p className="articleSource ArtContents">Source {article.source.url}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <h1 className="LoadingContents">
        <img src="./Loading.gif" alt="Loading..." />
      </h1>
    );
  };

  return data.length > 0 ? loaded() : loading();
}
