import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { PlayBtn } from "react-bootstrap-icons";
import { addToLikedAction } from "../redux/actions";
import { removeFromLikedAction } from "../redux/actions";

const Player = () => {

    const dispatch = useDispatch();

    const albumInfo = useSelector((state) => state.currentAlbum.results)
    const playingInfo = useSelector((state) => state.currentPlaying.results)
    const [isLoading, setIsloading] = useState(true);
    const [trackInfo, setTrackInfo] = useState(null);
    const [isFav, setIsFav] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [infoAlbum, setInfoAlbum] = useState(albumInfo)
    const isItFav = useSelector((state) => state.liked.list.includes(trackInfo));

    useEffect(() => {
        setIsloading(true);
    }, [])
    
    useEffect(() => {
        if (playingInfo !== null) {
            setTrackInfo(playingInfo[0])
            setIsFav(isItFav)
            setInfoAlbum(albumInfo)
            setIsloading(false)
            console.log(infoAlbum)
            // console.log(tracklist)
            // console.log(currentAlbum)
            // console.log(tracks)
        }
    }, [playingInfo, trackInfo, isFav, isItFav, albumInfo, infoAlbum])

    useEffect(() => {
        console.log(isPlaying)
    }, [isPlaying])

    const messaggio = () => {
        alert('Mi spiace, al momento non faccio granchè. Migliorerò in futuro')
    }

    return (
        <div className="player-container">
            <div className="album-details d-flex flex-column">
                {isLoading ? (
                    <div>
                        {/* <Spinner variant="danger" className="mt-3" /> */}
                        <p> - - - - - - - - </p>
                    </div>
                ) : (
                    <div className="d-flex align-items-center player-info">
                        <img src="" alt="Album Cover" className="image-album"/>
                        <div>
                            <p>{trackInfo.artist.name}</p>
                            <p>{trackInfo.title}</p>
                            <audio src={trackInfo.preview}
                                autoPlay
                                onPlay={() => {
                                    setIsPlaying(true)
                                    document.querySelector('.image-album').setAttribute('src', albumInfo[0].album.cover)
                                }}
                                onEnded={() => {
                                    setIsPlaying(false)
                                }}
                            />
                        </div>
                    </div>

                )}
            </div>
            <div className="player-buttons">
                <button onClick={messaggio}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5" />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                </svg></button>
                <button onClick={messaggio}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-rewind-fill" viewBox="0 0 16 16">
                        <path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                        <path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                    </svg>
                </button>
                {isPlaying ? (
                    <button onClick={() => {
                        document.querySelector('audio').pause()
                        setIsPlaying(false)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                        </svg>
                    </button>

                ) : (
                    <button onClick={() => {
                        document.querySelector('audio').play()
                        setIsPlaying(true)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                        </svg>
                    </button>
                )}
                <button onClick={messaggio}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16">
                        <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                        <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                    </svg>
                </button>
                <button onClick={messaggio}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
                        <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                    </svg>
                </button>
            </div>
            <div className="liked">
                {isFav ? (
                    <div>
                        <HeartFill
                            width={24}
                            height={24}
                            onClick={() => {
                                dispatch(removeFromLikedAction(trackInfo))
                                setIsFav(!isFav)
                                console.log(trackInfo)
                            }} />
                    </div>
                ) : (
                    <div>
                        <Heart
                            width={24}
                            height={24}
                            onClick={() => {
                                dispatch(addToLikedAction(trackInfo))
                                setIsFav(!isFav)
                                console.log(trackInfo)
                            }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Player;