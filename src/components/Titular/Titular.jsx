import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { deleteTitular } from '../../redux/jugador';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Titular = () => {
    const dispatch = useDispatch();
    const titulares = useSelector(state => state.jugadores.titulares)
    return (
        <section>
            <H1>Titulares</H1>
            <Div>
            {
                titulares.map(titular => (
                    <Article className="titular" key={titular.id}>
                        <DivImg>
                            <Img src={titular.imagen} alt={titular.name}/>
                        </DivImg>
                        <DivName>
                            <H4>Nombre:</H4>
                            <H5>{titular.name} {titular.lastName}</H5>
                            <H4>Edad: </H4>
                            <H5>{titular.edad}</H5>
                        </DivName>
                        <div>
                            <Button onClick={() => dispatch(deleteTitular(titular)) }>X</Button>
                        </div>
                    </Article>
                ))
            }
            </Div>
        </section>
    )
}

export default Titular;

