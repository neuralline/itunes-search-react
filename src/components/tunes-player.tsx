import React from "react";
import { PropsInterface } from "../interface/interface";
import hart from "../img/hart.png";

const TunesPlayer = (props: PropsInterface) => {
  const { tune, favorite, addToFavorite } = props;
  const temp = favorite ? [...favorite, tune] : [tune];
  return (
    <div className="tunes-player">
      {tune ? (
        <>
          <video autoPlay src={tune.previewUrl} className="player" />
          <p>{tune.trackCensoredName}</p>
          <p>By {tune.artistName}</p>
          <p>Price £{tune.trackPrice}</p>
          <p>Release date {tune.releaseDate}</p>
          <p onClick={() => {
                addToFavorite(temp);
              }}>
            <img
              className="fav-icon"
              src={hart}
              alt='+ add to favorite'
            />
             
          </p>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TunesPlayer;
