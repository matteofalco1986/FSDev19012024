import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { addToLikedAction } from "../redux/actions";
import { removeFromLikedAction } from "../redux/actions";

const Player = () => {

    const dispatch = useDispatch();
    
    const playingInfo = useSelector((state) => state.currentPlaying.results)
    const [isLoading, setIsloading] = useState(true);
    const [trackInfo, setTrackInfo] = useState(null);
    const [isFav, setIsFav] = useState(false);
    const isItFav = useSelector((state) => state.liked.list.includes(trackInfo));
    
    useEffect(() => {
        setIsloading(true);
    }, [])

    useEffect(() => {
        if (playingInfo !== null) {
            setTrackInfo(playingInfo[0])
            setIsFav(isItFav)
            setIsloading(false)
            // console.log(tracklist)
            // console.log(currentAlbum)
            // console.log(tracks)
        }
    }, [playingInfo, trackInfo, isFav, isItFav])

    return (
        <div className="player-container">
            <div className="album-details d-flex flex-column">
                {isLoading ? (
                    <div>
                        {/* <Spinner variant="danger" className="mt-3" /> */}
                        <p>- - - - </p>
                    </div>
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
            <div className="player-buttons">
                <button onClick={() => console.log(playingInfo[0])}>Shuffle</button>
                <button>Backwards</button>
                <button>Play</button>
                <button>Forwards</button>
                <button>Playback</button>
            </div>
            <div className="liked">
                {isFav ? (
                    <div>
                        <HeartFill onClick={() => {
                            dispatch(removeFromLikedAction(trackInfo))
                            setIsFav(!isFav)
                            console.log(trackInfo)}} />
                    </div>
                ) : (
                    <div>
                        <Heart onClick={() => {
                            dispatch(addToLikedAction(trackInfo))
                            setIsFav(!isFav)
                            console.log(trackInfo)}} />
                    </div>
                )}
            </div>
        </div>  
    )
}

export default Player;