import { useEffect, useState } from "react";
import styled from "@emotion/styled"
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 20px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Moneda', monedas);
    const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Criptomoneda', criptos);

    useEffect( () => {
        const consultarAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map( cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto;
            } );

            console.log(arrayCriptos);
            setCriptos(arrayCriptos);
        }

        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        
        if ([moneda, criptomoneda].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {
                error && <Error mensaje="Todos los campos son requeridos." />
            }

            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptomonedas />

                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario