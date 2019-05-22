import React, { Component, Suspense } from 'react'
import SearchBox from '../components/SearchBox'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import styled from 'styled-components'

const mapDispatchToProps = () => ({})
const mapStateToProps = (state) => {
  return {
    photos: state.photos.photos,
    loading: state.photos.loading
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const PhotoDisplayer = React.lazy(() => import('../components/PhotoDisplayer'))

class Main extends Component {

  render () {
    return (
      <Container>
        <SearchBox />
        {!isEmpty(this.props.photos) && (
          <Suspense fallback={<LoaderContainer><Loader /></LoaderContainer>}>
            <PhotoDisplayer
              isLoading={this.props.loading}
              photos={this.props.photos}
            />
          </Suspense>
        )}
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
