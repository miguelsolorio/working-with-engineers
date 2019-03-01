import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  transform: scale(1.5);
`

const ImageLG = ({ src }) => <IMG src={src} />

export default ImageLG