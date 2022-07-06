import { useState } from "react"
import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 800;
    margin: 10px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <Label htmlFor="monedas">{label}</Label>
            <Select 
                id="monedas" 
                value={state}
                onChange={ e => setState(e.target.value) }
            >
                <option value="">Seleccione la moneda...</option>
                {
                    opciones.map( opcion => (
                        <option
                            key={opcion.id}
                            value={opcion.id}
                        >
                            { opcion.nombre }
                        </option>
                    ) )
                }
            </Select>
        </>
    )

    return [ state, SelectMonedas ]
}

export default useSelectMonedas