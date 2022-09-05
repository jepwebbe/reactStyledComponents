import React from 'react'
import { Button } from '../StyledComponents/Button.Styled'
import { StyledCard } from '../StyledComponents/Cart.Styled'
import { Heading } from '../StyledComponents/Heading.Styled'

export const Cart = () => {
  return (
    <StyledCard>
        <img src="https://img01.ztat.net/article/spp-media-p1/353d72c2036d45d7bfcc187849576f6f/032dc3b2806e45c28d8dcd35e82980dc.jpg?imwidth=300" alt="Jeans" />
        <Heading as="h2">Tailored jeans</Heading>
        <p>20 kr</p>
        <p>Some text</p>
        <p>
            <Button>Tilføj til kurv</Button>
        </p>
    </StyledCard>
  )
}
