import React from 'react'
import { PropsInterface, Tune } from "../interface/interface";

const TunesContainer = (props:PropsInterface) => {

  let {result, selectTune}=props 
    return (
        <div className="tunes-container">
        {result ? result.map((tune: Tune) => {
          return (
            <div key={tune.trackId}
              style={{
                backgroundImage: `url('${tune.artworkUrl100}')`
              }}
              className="tunes-artwork"
              title={tune.trackName}
              onClick={()=>{selectTune(tune)}}
            ></div>
          );
        }) : <div className="tunes-artwork">searching...</div>}
      </div>
    )
}

export default TunesContainer
