import { Container } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import Logo from "./Logo";
import { HomeLink } from "./HomeLink";
import { SearchForm } from "./SearchForm";
import { Search } from "react-bootstrap-icons";
import { LoginButton } from "./LoginButton";
import { MyFooter } from "./MyFooter";


export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <HomeLink />
            <SearchForm />
            <LoginButton />
            <MyFooter />
        </div>
    )
}