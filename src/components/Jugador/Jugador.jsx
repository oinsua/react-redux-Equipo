import React from 'react';
import {connect} from 'react-redux';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Jugador = ({jugadores, Add_Titular, Add_Suplente}) => {
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
                                                        <Button onClick={() => Add_Titular(jugador)}>Titular</Button>
                                                        <Button onClick={() => Add_Suplente(jugador)}>Suplente</Button>
                                                    </div>
                                                </Article>
                                            ))
                }
            </Div>
        </section>    
    )
}

const mapStateToProps = (state) => {
   return {jugadores : state.jugadores};
}

const matDispatchToProps = dispatch => ({
    Add_Titular(jugador) {
        dispatch({
            type: "Add_Titular",
            jugador
        })
    },
    Add_Suplente(jugador){
        dispatch({
            type: "Add_Suplente",
            jugador
        })
    }
});

export default connect(mapStateToProps, matDispatchToProps)(Jugador); 
