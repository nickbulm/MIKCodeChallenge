import React, {useState} from "react"
import '../Stylesheets/Search.css';

function Search(props) {
    const [value, setValue] = useState(props.val)
    const changeVal = (e) => {
        setValue(e.target.value)
        props.setval(e.target.value)
    }
    return (
      <div className="Search">
          <div className="left">
            <div className="inputs">
                <div className="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input value={value} name="search" onChange={(event) => changeVal(event)} placeholder="Search" />
                </div>
            </div> 
            <div className="cover" >
                <div className="text">
                    <h4 className="top">SEARCH FOR TRACK</h4>
                    <h4 className="bottom">ALPHABETICALLY</h4>
                </div>
            </div>
          </div>
          <div className="right">
            <div className="text">
              <h4 className="top">SEARCH FOR</h4>
              <h4 className="bottom">FIFA RELEASE YEAR</h4>
            </div>
          </div>
      </div>
    );
  }
  
  export default Search;