import { useState } from "react";
import { UseSelector, useDispatch } from "react-redux";

const Player = () => {
    
    
    return (
        <div className="player-container">
            <div className="album-details d-flex flex-column">
                <img src="" alt="" />
                <p>Song title</p>
            </div>
            <div className="buttons">
                <button>Shuffle</button>
                <button>Backwards</button>
                <button>Play</button>
                <button>Forwards</button>
                <button>Playback</button>
            </div>
            <div className="liked">
                <div>Heart emoji</div>
            </div>
        </div>
    )
}

export default Player;