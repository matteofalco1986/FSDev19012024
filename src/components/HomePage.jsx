import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MyNavbar } from "./MyNavbar";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { SingleAlbum } from "./SingleAlbum";

export const HomePage = () => {

    const searchResults = useSelector((state) => state.search.results);

    const [isLoading, setIsloading] = useState(true);
    const [searchInfo, setSearchInfo] = useState(null);

    useEffect(() => {
        setIsloading(true);
    }, [])

    useEffect(() => {
        if (searchResults !== null) {
            setSearchInfo(searchResults)
            setIsloading(false)
            console.log(searchInfo)
            console.log(searchResults)
        }
    }, [searchResults, searchInfo])

    return (
        <div className="home-page">
            <div className="homepage-container">
                <MyNavbar />
            </div>
            <Container className="container-albums">
                <Row className="justify-content-center">
                    {!searchInfo ? (
                        <Spinner
                            variant="danger"
                            className="boot-spinner"
                        />
                    ) : (
                        <>
                            {searchInfo[0].map((element) => {
                                return (
                                    <Col key={element.id} xs={6} md={4} lg={3} className="text-center">
                                        <SingleAlbum info={element}/>
                                    </Col>
                                )
                            })}
                        </>
                    )}
                </Row>
            </Container>
        </div>
    )
}