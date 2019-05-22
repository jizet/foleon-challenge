import React, { Component } from 'react'
import styled from 'styled-components'
import { Image } from './Image'
import Loader from './Loader'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 50px;
  padding: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  width: 935px;
  min-height: 75%;
`
class PhotoDisplayer extends Component {

  render () {
    const { photos, isLoading } = this.props
 
    return isLoading ? <React.Fragment><Loader /></React.Fragment> :
            <Container>
              {
                photos.map((item, index) => (
                    <Image
                      key={index}
                      id={item.id}
                      farmId={item.farm}
                      serverId={item.server}
                      secret={item.secret}
                    />
                ))
              }
            </Container>
  }
}

export default PhotoDisplayer
