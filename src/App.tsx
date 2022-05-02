import React from "react";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import Logo from "./additionals/Logo.png";
import { useState } from "react";

const title = "React App";
const listOfItems = [
  {
    title: "Cognitive clouds",
    url: "https://www.cognitiveclouds.com/",
    objectId: 1,
    author: "vijay",
    created_at: "27-10-2022",
    points: 2000,
  },
  {
    created_at: "2020-10-23T19:26:35.000Z",
    title: "YouTube-dl has received a DMCA takedown from RIAA",
    url: "https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md",
    author: "phantop",
    points: 4240,
    objectId: 2,
  },
  {
    created_at: "2017-02-19T21:16:33.000Z",
    title: "Reflecting on one very, very strange year at Uber",
    url: "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
    author: "grey-area",
    points: 4107,
    objectId: 3,
  },
  {
    created_at: "2020-01-21T15:38:22.000Z",
    title: "Every Google result now looks like an ad",
    url: "https://twitter.com/craigmod/status/1219644556003565568",
    author: "cmod",
    points: 3592,
    objectId: 4,
  },
];

function App() {
  const [searchText, setSearchText] = useState("");

  function handlechange(event: any) {
    setSearchText(event.target.value);
  }

  const filteredList = listOfItems.filter((item: any) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <nav>
        <div>
          <div className="heading">
            <h1>{title}</h1>
            <img src={Logo} />
          </div>
        </div>
        <Search searchText={searchText} onChange={handlechange} />
      </nav>
      <List listOfItems={filteredList} />
    </div>
  );
}

export default App;
