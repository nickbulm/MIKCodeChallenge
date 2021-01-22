import React from "react"

function Track(props) {
    return (
      <div className="Track" style={props.style}>
        <div className="artcont">
            <img src={props.track.album_art_url} alt="album art" className="albart" />
        </div>
        <div className="text">
            <div className="textRow"><p className="label">TRACK</p></div>
            <div className="textRow"><p className="inf">{props.track.name}</p></div>
            <div className="textRow"><p className="label">ARTIST</p></div>
            <div className="textRow"><p className="inf" >{props.track.artist_names}</p></div>
        </div>
      </div>
    );
  }
  
  export default Track;