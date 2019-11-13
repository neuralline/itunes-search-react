import React, { useState, useEffect } from "react";
import "./App.css";
import { Tune } from "./interface/interface";
import TunesPlayer from "./components/tunes-player";
import TunesContainer from "./components/tunes-container";
import TunesFavorite from "./components/tunes-favorite";

const App: React.FC = () => {
  useEffect(() => {}, []);
  const [result, searchTunes] = useState<[]>([]);
  const [favoriteTunes, setFavorite] = useState();
  const [playTune, selectTune] = useState<Tune>();

  const getContent = (search: string) => {
    const url: any = new URL("https://itunes.apple.com/search");
    const params = { term: search, media: "musicVideo", limit: "25" };
    url.search = new URLSearchParams(params);
    getInfo(url);
  };

  const getInfo = async (url: string) => {
    const res = await fetch(url);
    const list = await res.json();
    searchTunes(list.results);
  };

  const addToFavorite=(tune:Tune)=>{ 
     setFavorite(tune)
  }

  return (
    <div className="tunes">
      <div className="tunes-search">
        <h1>iTunes search pro</h1>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            getContent(event.target.value)
          }
        />
      </div>
      <div className="tunes-section">       
        <TunesContainer result={result} selectTune={selectTune} />
        <TunesPlayer tune={playTune} favorite={favoriteTunes} addToFavorite={addToFavorite} />
      </div>
      <TunesFavorite favorite={favoriteTunes} selectTune={selectTune} />
    </div>
  );
};

export default App;
