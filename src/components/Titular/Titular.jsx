import React from 'react';
import {connect} from 'react-redux';

const Titular = ({titulares, Delete_Titular}) => {
    return (
        <div className="container-titulares">
            <h1>Titulares</h1>
            {
                titulares.map(titular => (
                    <article className="titular" key={titular.id}>
                        <img src={titular.imagen} alt={titular.name}/>
                        <h5>Nombre :{titular.name} {titular.lastName}</h5>
                        <h5>Edad: {titular.edad}</h5>
                        <div>
                            <button onClick={() => Delete_Titular(titular)}>X</button>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({titulares: state.titulares})

const mapDispatchToProps = (dispatch) => ({
    Delete_Titular(titular){
        dispatch({
            type: "Delete_Titular",
            titular
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titular) 
