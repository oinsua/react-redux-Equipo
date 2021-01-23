import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTitular} from '../../redux/action/jugadores'
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Titular = () => {
    const dispatch = useDispatch();
    const {titular, error} = useSelector(state => state);
    return (
        <section>
            <H1>Titulares</H1>
            <Div>
            {
                titular && titular.map(titular => (
                    <Article  key={titular.imagen}>
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
            {
                     error && <H4>Se ha producido un error en la llamada a la API. Mensaje : {error}</H4> 
            }
            </Div>
        </section>
    )
}

export default Titular;

