import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentPlayingAction } from "../redux/actions";

export const SingleSong = ({ element, albumInfo }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const convertSecToMins = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className="d-flex single-track" onClick={() => {
            dispatch(getCurrentPlayingAction(element))
            console.log(element)
        }} key={element.id}>
            <p className="details-track">{element.track_position}</p>
            <p className="details-track">{element.title}</p>
            <p className="details-track">{convertSecToMins(element.duration)}</p>
        </div>
    )
}