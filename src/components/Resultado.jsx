import styled from "@emotion/styled";

const Info = styled.div`
    background-color: #12375a;
    padding: 5px 15px;
    border-radius: 10px;
    margin-top: 25px;
    text-align: center;
`

const Texto = styled.p`
    font-size: 20px;
    span {
        font-weight: 800;
    }
`

const Imagen = styled.img`
    /* display: block; */
    width: 150px;
`

const Precio = styled.p`
    font-size: 20px;
    span {
        font-weight: 800;
    }
`

const Resultado = ({cotizacion}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion; 

    return (
        <Info>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen de cripto" />
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualizacion: <span>{LASTUPDATE}</span></Texto>
        </Info>
    )
}

export default Resultado