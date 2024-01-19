import { UseSelector } from "react-redux";


export const SingleAlbum = ({ info }) => {
    return (
        <div className="single-album">
            <img src={info.album.cover} alt="Album image" />
            <p className="album-par">Album: {info.album.title} </p>
            <p className="artist-par">Artist: {info.artist.name}</p>
        </div>
    )

}