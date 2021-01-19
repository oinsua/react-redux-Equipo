import React from 'react'
import {connect} from 'react-redux' 

const Jugador = ({jugadores, Add_Titular, Add_Suplente}) => {
    return (
        <section>
            <h1>Jugadores</h1>
            <div className="contianer-jugadores">
                {
                    jugadores.map(jugador => (
                                                <article className="jugador" key={jugador.id}>
                                                    <img src={jugador.imagen} alt={jugador.name}/>
                                                    <h5>Nombre :{jugador.name} {jugador.lastName}</h5>
                                                    <h5>Edad: {jugador.edad}</h5>
                                                    <div>
                                                        <button onClick={() => Add_Titular(jugador)}>Titular</button>
                                                        <button onClick={() => Add_Suplente(jugador)}>Suplente</button>
                                                    </div>
                                                </article>
                                            ))
                }
            </div>
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
