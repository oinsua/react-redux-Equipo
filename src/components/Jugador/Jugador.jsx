import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startGetPlayer, addTitular,addSubstitut} from '../../redux/action/jugadores'; 
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Jugador = () => {

    const dispatch = useDispatch(); //Iniciar una variable para despachar las acciones
    const {players, error} = useSelector(state => state);
    
    /*Obtener los items desde la data a traves de la accion fetch API */
    useEffect(()=> {
         dispatch(startGetPlayer()); //Se despacha la action para obtener los items.
         
    },[dispatch])

    return (
        <section>
            <H1>Jugadores</H1>
            <Div>
                {
                    players && players.map(jugador => (
                                                <Article key={jugador.id}>
                                                    <DivImg>
                                                        <Img src={jugador.imagen} alt={jugador.name}/>
                                                    </DivImg>
                                                    <DivName>
                                                        <H4>Nombre:</H4>
                                                        <H5> {jugador.name} {jugador.lastName}</H5>
                                                        <H4>Edad: </H4>
                                                        <H5>{jugador.edad}</H5>
                                                    </DivName>
                                                    <div>
                                                        <Button onClick={() => dispatch(addTitular(jugador)) }>Titular</Button>
                                                        <Button onClick={() => dispatch(addSubstitut(jugador)) }>Suplente</Button>
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

export default Jugador;