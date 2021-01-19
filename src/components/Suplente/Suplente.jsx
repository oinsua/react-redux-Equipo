import React from 'react';
import {connect} from 'react-redux';

const Suplente = ({suplentes, Delete_Suplente}) => {
    return (
        <div className="container-suplentes">
            <h1>Suplentes</h1>
            {
               suplentes.map(suplente => (
                <article className="suplente" key={suplente.id}>
                    <img src={suplente.imagen} alt={suplente.name}/>
                    <h5>Nombre :{suplente.name} {suplente.lastName}</h5>
                    <h5>Edad: {suplente.edad}</h5>
                    <div>
                        <button onClick={() => Delete_Suplente(suplente)}>X</button>
                    </div>
                </article>
            ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({suplentes:state.suplentes})
const mapDispatchToProps = (dispatch) => ({
    Delete_Suplente(suplente){
        dispatch({
            type: "Delete_Suplente",
            suplente
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplente) 
