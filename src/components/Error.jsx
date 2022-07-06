import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 13px;
    font-size: 15px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
`

const Error = ({mensaje}) => {
    return (
        <Texto>
            {mensaje}
        </Texto>
    )
}

export default Error