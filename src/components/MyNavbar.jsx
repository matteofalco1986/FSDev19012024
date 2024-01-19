import { Nav, Navbar } from "react-bootstrap"
import Container from "react-bootstrap"

export const MyNavbar = () => {
    return (
        <div>
            <Navbar>
                <Nav>Trending</Nav>
                <Nav>Podcast</Nav>
                <Nav>Moods and genres</Nav>
                <Nav>New releases</Nav>
                <Nav>Discover</Nav>
            </Navbar>
        </div>
    )
} 