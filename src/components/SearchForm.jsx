import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchAction } from "../redux/actions";

export const SearchForm = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchAction(query));
        console.log(query)
        const timeout = setTimeout(() => { document.querySelector('input').value = '' }, 200);
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="d-flex">
                <Form.Control placeholder="Search" value={query} onChange={handleChange} />
                <Button type="submit" className="go-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </Button>
            </div>
        </Form>
    )
}