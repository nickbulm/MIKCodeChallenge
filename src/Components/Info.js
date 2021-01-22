import React, {useState} from "react"

function Info(props) {
    const [track, settrack] = useState(props.track)
    if (track.id !== props.track.id) {
        settrack(props.track)
    }
function Select() {
        props.setSelect(track.id)
        props.close()
    }
    return (
      <div className="Info">
        <div className="artcont">
            <div className="grid1">
                <img src={track.album_art_url} alt="album art" className="albart" />
            </div>
            <div className="grid2">
                <svg xmlns="http://www.w3.org/2000/svg" cursor="pointer"  width="24" height="24" color="white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" color="white" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </div>
            <div className="grid3">
                <svg onClick={() => props.close()} cursor="pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div className="grid4">
                <div onClick={() => Select()} className="selectSong" >Select Song</div>
            </div>
        </div>
        <div className="text">
            <div className="textRow"><p className="label">TRACK</p></div>
            <div className="textRow"><p className="inf">{track.name}</p></div>
            <div className="textRow"><p className="label">ARTIST</p></div>
            <div className="textRow"><p className="inf" >{track.artist_names}</p></div>
            <div className="textRow"><p className="label">FIFA YEAR</p></div>
            <div className="textRow"><p className="inf" >{track.fifa_year}</p></div>
        </div>
      </div>
    );
  }
  
  export default Info;