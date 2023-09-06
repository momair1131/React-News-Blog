import FetchData from "../components/FetchData/FetchData";
import Hero from "../components/Hero/Hero";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      {/* <h1>Home Page</h1> */}
      <Hero />
      <FetchData />
    </div>
  );
}
