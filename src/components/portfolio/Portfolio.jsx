import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data.js";

export default function Portfolio() {
  const list = [
    { id: "featured", title: "Featured" },
    { id: "webApp", title: "Web App" },
    { id: "moblieApp", title: "Moblie App" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);

        break;
      case "webApp":
        setData(webPortfolio);

        break;
      case "moblieApp":
        setData(mobilePortfolio);

        break;
      case "design":
        setData(designPortfolio);

        break;
      case "content":
        setData(contentPortfolio);

        break;

      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='' />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
