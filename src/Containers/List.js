import React, {useState, createRef} from "react";
import Track from "../Components/Track";
import Info from "../Components/Info";
import {reduceList} from "../Functions";
function List(props) {

    const [selectedLetter, setselectedLetter] = useState("#")
    const [info, setinfo] = useState(null)
    const [expand, setexpand] = useState(false)
    const [selectedTrack, setselectedTrack] = useState(null)
    
    let alphabet = []
    const toggleExpandTrue = (i) => {
        setexpand(true)
        setinfo(i)
    }
    const toggleExpandFalse = () => {
        setexpand(false)
        setinfo(null)
    }
    let ref = {}
    let list = []
    let accList = []
    if (props.sVal !== "") {
        list = props.tracks.map((track, index) => 
        <li className="TrackLi" key={index} onClick={() => toggleExpandTrue(track)} >
            {selectedTrack === track.id ?
                <Track track={track} style={{border: "3px solid white"}} />
                :
                <Track track={track} />
            }
        </li>   
        )
    } else {
        accList = reduceList(props.tracks)
        Object.entries(accList).forEach(track => {
            let lett =  track[1].letter
            ref[lett] = createRef()
            alphabet.push(lett)
            })
        list = Object.entries(accList).map((v) => 
            <li className="group" key={v[1].letter} ref={ref[v[1].letter]} >
                <div className="grouptitle" style={{color:"white"}}><div>{v[1].letter}</div></div>
                <ul >
                    {v[1].tracks.map((t, index) =>
                        <li className="TrackLi" key={`${v[1].letter}${index}`} onClick={() => toggleExpandTrue(t)}>
                            {selectedTrack === t.id ?
                                <Track track={t} style={{border: "3px solid white"}} />
                                :
                                <Track track={t} />
                            }
                        </li>
                    )}
                </ul>
            </li>   
        )
    }
    
    const scroll = (l) => {
        setselectedLetter(l)
        ref[l].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }
    const letters = alphabet.map(letter => 
        <li className="letter" onClick={() => scroll(letter)} key={letter}>
            {selectedLetter === letter ?
                <div style={{color:"#79facc"}}>
                    {letter}
                </div>
            :
                <div  >
                    {letter}
                </div>
            }
        </li>
        )
    return (
      <div className="List">
        {expand !== false &&
            <Info close={() => toggleExpandFalse()} track={info} setSelect={(id) => setselectedTrack(id)} />
        }
        <div className="alphabet">
            <ul className="alphaList">
                {letters}
            </ul>
        </div>
        <div className="Tracks">
            <ul >
                {list}
            </ul>
        </div>
      </div>
    );
  }
  
  export default List;