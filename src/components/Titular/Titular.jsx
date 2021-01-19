import React from 'react';
import {connect} from 'react-redux';
import {Div, H1, Img, Article, DivImg, DivName, H4, H5, Button} from '../../styled/base';

const Titular = ({titulares, Delete_Titular}) => {
    return (
        <section>
            <H1>Titulares</H1>
            <Div>
            {
                titulares.map(titular => (
                    <Article className="titular" key={titular.id}>
                        <DivImg>
                            <Img src={titular.imagen} alt={titular.name}/>
                        </DivImg>
                        <DivName>
                            <H4>Nombre:</H4>
                            <H5>Nombre :{titular.name} {titular.lastName}</H5>
                            <H4>Edad: </H4>
                            <H5>Edad: {titular.edad}</H5>
                        </DivName>
                        <div>
                            <Button onClick={() => Delete_Titular(titular)}>X</Button>
                        </div>
                    </Article>
                ))
            }
            </Div>
        </section>
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
