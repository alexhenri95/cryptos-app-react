import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImagenCrypto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    margin-bottom: 40px;
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`

const Heading = styled.h1`
    font-size: 35px;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin: 10px auto 10px auto;
    }
`

const Imagen = styled.img`
    max-width: 300px;
    width: 80%;
    margin: 0 auto;
`

const App = () => {

    const [monedas, setMonedas] = useState({});
    const [cotizacion, setCotizacion] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (Object.keys(monedas).length > 0) {
            
            const cotizarCripto = async() => {
                setCargando(true)
                setCotizacion({})
                const { moneda, criptomoneda } = monedas;
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
                setCargando(false)
            }

            cotizarCripto();

        }
    }, [monedas]);

    return (
        <>
            <Heading>Cotiza Criptomonedas al instante</Heading>
            <Contenedor>
                {/* <Imagen src={ImagenCrypto} /> */}

                <div>
                    <Formulario
                        setMonedas={setMonedas}
                    />
                </div>

                <div>
                    {/* {
                        cargando && <Spinner/>
                    } */}

                    {
                        cotizacion.PRICE ? <Resultado cotizacion={cotizacion} /> : <Imagen src={ImagenCrypto} /> 
                    }
                </div>
                
                
                

            </Contenedor>
        </>
    )
}

export default App