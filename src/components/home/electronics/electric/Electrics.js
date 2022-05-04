import React  ,{useState,useEffect}from 'react';
import { Container,Row } from 'react-bootstrap';
import Electric from './Electric';

const Electrics = () => {
    const [electrics,setElectric] = useState([])

    useEffect(() => {
        fetch('./electric.json')
            .then(res => res.json())
            .then(data => {
                setElectric(data)
            })
    }, [])
    return (
        <Container fluid className="mt-3 w-75 mx-auto">
            <Row xs="1" md="3">
               {
                   electrics.map(electric=><Electric
                   electric={electric}
                   ></Electric>)
               }
            </Row>


        </Container>
    );
};

export default Electrics;