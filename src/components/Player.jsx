import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Player = () => {

    const playingInfo = useSelector((state) => state.currentPlaying.results)
    const [isLoading, setIsloading] = useState(true);
    const [trackInfo, setTrackInfo] = useState(null);

    useEffect(() => {
        setIsloading(true);
    }, [])

    useEffect(() => {
        if (playingInfo !== null) {
            setTrackInfo(playingInfo[0])
            setIsloading(false)
            // console.log(tracklist)
            // console.log(currentAlbum)
            // console.log(tracks)
        }
    }, [playingInfo, trackInfo])

    return (
        <div className="player-container">
            <div className="album-details d-flex flex-column">
                {isLoading ? (
                    <Spinner variant="danger" className="mt-3" />
                ) : (
                    <div className="d-flex align-items-center player-info">
                        <img src="" alt="Album Cover" />
                        <div>
                            <p>{trackInfo.artist.name}</p>
                            <p>{trackInfo.title}</p>
                        </div>
                    </div>

                )}
            </div>
            <div className="buttons">
                <button onClick={() => console.log(playingInfo[0])}>Shuffle</button>
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