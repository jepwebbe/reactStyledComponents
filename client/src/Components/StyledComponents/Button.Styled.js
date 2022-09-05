import styled from 'styled-components'

export const Button = styled.button`

    border-radius: 8px;
    color: ${(props) => (props.color ? props.color : "red")}
    border-color: blue;
    background-color: green;
    &:hover {
        transform: scaleY(2)
    }
`

