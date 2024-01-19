import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MyNavbar } from "./MyNavbar";
import { Spinner } from "react-bootstrap";
import { SingleSong } from "./SingleSong";

export const AlbumPage = () => {

    const params = useParams();
    const navigate = useNavigate();

    const tracklist = useSelector((state) => state.tracklist.results);
    const albumInfo = useSelector((state) => state.currentAlbum.results)

    const [isLoading, setIsloading] = useState(true);
    const [tracks, setTracks] = useState(null);
    const [currentAlbum, setCurrentAlbum] = useState(null);

    useEffect(() => {
        setIsloading(true);
    }, [])

    useEffect(() => {
        if (tracklist !== null) {
            setTracks(tracklist[0])
            setCurrentAlbum(albumInfo)
            setIsloading(false)
            // console.log(tracklist)
            // console.log(currentAlbum)
            // console.log(tracks)
        }
    }, [tracklist, tracks, albumInfo, currentAlbum])

    const convertSecToMins = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
      
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className="home-page">
            <div className="homepage-container">
                <MyNavbar />
            </div>
            {!tracks ? (
                <Spinner
                    variant="danger"
                    className="boot-spinner"
                />
            ) : (
                <div className="d-flex album-container">
                    <div className="single-album" >
                        <img src={currentAlbum[0].album.cover_big} alt="Album image" className="album-image-playlist"/>
                        <p className="album-par">Album: "{currentAlbum[0].album.title}"</p>
                        <p className="artist-par">Artist: {currentAlbum[0].artist.name}</p>
                    </div>
                    <div className="d-flex flex-column songs-container">
                        <div className="d-flex single-track">
                            <p className="header-track">Number</p>
                            <p className="header-track">Track name</p>
                            <p className="header-track">Duration</p>
                        </div>
                        {tracks.map((element) => {
                            return (
                                <SingleSong element={element} albumInfo={albumInfo} key={element.id}/>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}