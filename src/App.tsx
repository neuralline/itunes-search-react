import React, { useState, useEffect } from "react";
import "./App.css";
import { Tune } from "./interface/interface";
import { toUnicode } from "punycode";
const App: React.FC = () => {
  useEffect(() => {}, []);
  const [inputValue, setInputValue] = useState<[]>([]);
  const [playTune, setTune] = useState()
  const getContent = (search: string) => {
    const url: any = new URL("https://itunes.apple.com/search");
    const params = { term: search, media: "musicVideo", limit:'25' };
    url.search = new URLSearchParams(params);
    getInfo(url);
  };

  const getInfo = async (url: string) => {
    console.log("getInfo was called : ", url);
    const res = await fetch(url);
    const list = await res.json();
    console.log("list", list.results);
    setInputValue(list.results);
  };


  return (
    <div className="tunes">
      <div className="tunes-search">
        <h1>
          iTunes search pro
        </h1>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            getContent(event.target.value)
          }
        />
      </div>
      <div className="tunes-container">
        {inputValue.map((tune: Tune) => {
          return (
            <div
              style={{
                backgroundImage: `url('${tune.artworkUrl100}')`
              }}
              className="tune-artwork"
              title={tune.trackName}
              onClick={()=>{setTune(tune)}}
            ></div>
          );
        })}
      </div>
      <div className='tunes-player'>
        {playTune ? <video autoPlay src={playTune.previewUrl} /> : <div></div>}
      </div>
    </div>
  );
};

/* {
  "wrapperType": "track",
  "kind": "music-video",
  "artistId": 480438107,
  "collectionId": 954898618,
  "trackId": 954898672,
  "artistName": "Bethel Music & kalley",
  "collectionName": "We Will Not Be Shaken (Live) [Deluxe Edition]",
  "trackName": "Ever Be",
  "collectionCensoredName": "We Will Not Be Shaken (Live) [Deluxe Edition]",
  "trackCensoredName": "Ever Be",
  "artistViewUrl": "https://music.apple.com/us/artist/bethel-music/480438107?uo=4",
  "collectionViewUrl": "https://music.apple.com/us/music-video/ever-be/954898672?uo=4",
  "trackViewUrl": "https://music.apple.com/us/music-video/ever-be/954898672?uo=4",
  "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/6e/e7/af/6ee7afb1-8a65-c441-9261-f4f7b272d203/mzvf_6884901529724364267.640x358.h264lc.U.p.m4v",
  "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Video3/v4/0e/c9/6c/0ec96ca4-f600-5895-1e64-a3bb71e45160/source/30x30bb.jpg",
  "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Video3/v4/0e/c9/6c/0ec96ca4-f600-5895-1e64-a3bb71e45160/source/60x60bb.jpg",
  "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Video3/v4/0e/c9/6c/0ec96ca4-f600-5895-1e64-a3bb71e45160/source/100x100bb.jpg",
  "collectionPrice": 14.99,
  "trackPrice": 1.99,
  "releaseDate": "2015-01-25T08:00:00Z",
  "collectionExplicitness": "notExplicit",
  "trackExplicitness": "notExplicit",
  "discCount": 1,
  "discNumber": 1,
  "trackCount": 17,
  "trackNumber": 12,
  "trackTimeMillis": 334888,
  "country": "USA",
  "currency": "USD",
  "primaryGenreName": "Christian & Gospel"
} */



export default App