import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //definimos el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //funcion que lee el prespuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value) )
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validamos
        if( cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        }

        //si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Escribe tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Escribe tu prespuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     )
}
 
export default Pregunta;