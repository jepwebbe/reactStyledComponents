import styled from 'styled-components'

export const Heading = styled.h1`

${(props) => HandleHTag(props)}
`

const HandleHTag = (props) => {
    switch (props.as) {
        case "h2":
            return `
        color: green;
        `
        case "h3":
            return `
        color: blue
        `

        case "h4":
            return `
        color: purple
        `

        default:
            return `
            font-size: 40px;
            line-height: 40px;
            color: yellow;
        `
    }
}
