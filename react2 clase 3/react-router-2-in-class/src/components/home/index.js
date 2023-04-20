import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useContext } from 'react'
import Context from '../../context'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

export default () => {

    const {characters,setCharacters} = useContext(Context)

    const navigate = useNavigate();

    const handleClick = (id) => {
        const character = characters.map((pepito) => {
            if (pepito.id === id){
                return {...pepito,favorito:true}
            }
            return pepito
        })
        setCharacters(character)
    }

    const goToCharacter = (id) =>{
        navigate(`/personaje/${id}`)
    } 

    const handleSelect = (e) =>{
        goToCharacter(e.target.value)
    }

    return (
        <div className='home-class'>
            <Container>
            <Form.Select onChange={handleSelect} className='my-1' aria-label="Default select example">
                <option>selecciona el personaje</option>
                {characters ? characters.map(character => <option value={character.id}>{character.name}</option>) : "loading"}
            </Form.Select>
                <Row className='align-items-center'>
                    {characters ? characters.map(character => 
                    <Col lg={4} md={12} className='my-4'>
                        <Card>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                <p>Especie: {character.species}</p>
                                <p>status: {character.status}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleClick(character.id)}>Favorito</Button>
                                <Button className="ms-3" variant="success" onClick={() => goToCharacter(character.id)}>ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    ) : <p>loading...</p>}
                    
                    
                </Row>
            </Container>
        </div>
    )
}