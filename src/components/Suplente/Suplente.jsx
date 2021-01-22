import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { deleteSuplente } from '../../redux/jugador';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Suplente = () => {
    const dispatch = useDispatch();
    const suplentes = useSelector(state => state.jugadores.suplentes)

    return (
        <section>
            <H1>Suplentes</H1>
            <Div>
            {
               suplentes.map(suplente => (
                <Article  key={suplente.id}>
                    <DivImg>
                    <Img src={suplente.imagen} alt={suplente.name}/>
                    </DivImg>
                    <DivName>
                            <H4>Nombre:</H4>
                            <H5>{suplente.name} {suplente.lastName}</H5>
                            <H4>Edad: </H4>
                            <H5>{suplente.edad}</H5>
                        </DivName>
                    <div>
                        <Button onClick={() => dispatch(deleteSuplente(suplente)) }>X</Button>
                    </div>
                </Article>
            ))
            }
            </Div>
        </section>
    )
}

export default Suplente;
