import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { deleteSubstitut } from '../../redux/action/jugadores';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Suplente = () => {
    const dispatch = useDispatch();
    const {substitut, error} = useSelector(state => state);

    return (
        <section>
            <H1>Suplentes</H1>
            <Div>
            {
               substitut.map(suplente => (
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
                        <Button onClick={() => dispatch(deleteSubstitut(suplente)) }>X</Button>
                    </div>
                </Article>
            ))
            }
            {
                     error && <H4>Se ha producido un error en la llamada a la API. Mensaje : {error}</H4> 
            }
            </Div>
        </section>
    )
}

export default Suplente;
