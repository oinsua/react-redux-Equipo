import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayer, addTitular, addSuplente} from '../../redux/jugador';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Jugador = () => {

    const dispatch = useDispatch(); //Iniciar una variable para despachar las acciones
    const jugadores = useSelector(state => state.jugadores.jugadores) //Se realiza una copia de los jugadores que estan dentro del state
  
    /*Obtener los items desde la data a traves de la accion fetch API */
    useEffect(()=> {
      dispatch(getPlayer('./data/data.json')); //Se despacha la action para obtener los items.
    },[dispatch])

    return (
        <section>
            <H1>Jugadores</H1>
            <Div>
                {
                    jugadores.map(jugador => (
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
                                                        <Button onClick={() => dispatch(addSuplente(jugador)) }>Suplente</Button>
                                                    </div>
                                                </Article>
                                            ))
                }
            </Div>
        </section>    
    )
}

export default Jugador;