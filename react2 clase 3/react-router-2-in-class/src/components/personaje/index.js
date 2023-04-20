import { useEffect,useState } from "react";
import {Row, Col, Button} from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import Context from '../../context'
import { useNavigate } from 'react-router-dom'

export default () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [character,setCharacter] = useState({})
    const {characters, setCharacters} = useContext(Context)

    useEffect(() => {
        /*fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data))*/

        let character = characters.find(val => val.id == id)
        setCharacter(character)
    },[])

    return (
    <>
    {character ?  
        <Row>
            <Col className="d-flex justify-content-center my-2"><img src={character.image}></img></Col>
            <Col className="my-5">
                <h1>{character.name}</h1>
                <ul>
                    <li>genero: {character.gender}</li>
                    <li>Especie: {character.species}</li>
                </ul>
                <Button variant="primary" onClick={() => navigate("/")}>volver al home</Button>
            </Col>
        </Row> :
        "loading"
        }
    </>
    )
}