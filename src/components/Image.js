import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.img`
  margin: 15px;
  height: 150px;
  width: 150px;
`

export const Image = (image) => {
  return (
    <React.Fragment>
      <ImageContainer
        src={`https://farm${image.farmId}.staticflickr.com/${image.serverId}/${image.id}_${image.secret}.jpg`}
      />
    </React.Fragment>
  )
}
