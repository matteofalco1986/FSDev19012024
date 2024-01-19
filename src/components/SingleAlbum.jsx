import { UseSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAlbumTracklistAction } from "../redux/actions";
import { getCurrentAlbumAction } from "../redux/actions";

export const SingleAlbum = ({ info }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [albumId, setAlbumId] = useState(info.album.id);
    const [albumInfo, setAlbumInfo] = useState(info)




    return (
        <div className="single-album" onClick={() => {
            // console.log(info)
            dispatch(getCurrentAlbumAction(albumInfo));
            dispatch(getAlbumTracklistAction(albumId));
            navigate(`/${info.album.id}`)
        }}>
            <img src={info.album.cover} alt="Album image" />
            <p className="album-par">Album: {info.album.title} </p>
            <p className="artist-par">Artist: {info.artist.name}</p>
        </div>
    )

}