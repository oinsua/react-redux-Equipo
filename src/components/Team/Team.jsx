import React from 'react'
import Suplente from '../Suplente/Suplente'
import Titular from '../Titular/Titular'


const Team = () => {
    return (
        <div className="container-Team">
          <Titular />
          <Suplente />
        </div>
    )
}

export default Team
