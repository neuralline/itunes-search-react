import React from "react";
import { PropsInterface, Tune } from "../interface/interface";

const TunesFavorite = (props: PropsInterface) => {
  let { favorite, selectTune } = props;
  return (
    <div className="tunes-favorite">
       <p>Favorites {favorite?favorite.length: 0}</p>
      {favorite ? (
        favorite.map((tune: Tune) => {
          return (
            <div
            key={tune.trackId}
              style={{
                backgroundImage: `url('${tune.artworkUrl100}')`
              }}
              className="fav-icon"
              title={tune.trackName}
              onClick={() => {
                selectTune(tune);
              }}
            ></div>
          );
        })
      ) : (
        <div  className="fav-icon"></div>
      )}
    </div>
  );
};

export default TunesFavorite;
