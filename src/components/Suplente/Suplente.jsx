import React from 'react';
import {connect} from 'react-redux';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Suplente = ({suplentes, Delete_Suplente}) => {
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
                            <H5>Nombre :{suplente.name} {suplente.lastName}</H5>
                            <H4>Edad: </H4>
                            <H5>Edad: {suplente.edad}</H5>
                        </DivName>
                    <div>
                        <Button onClick={() => Delete_Suplente(suplente)}>X</Button>
                    </div>
                </Article>
            ))
            }
            </Div>
        </section>
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
