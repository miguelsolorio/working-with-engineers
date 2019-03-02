import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  transform: scale(2);
`

const ImageXL = ({ src }) => <IMG src={src} />

export default ImageXL