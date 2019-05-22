import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { photosSearchRequest } from '../actions/PhotosActions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: (tags) => dispatch(photosSearchRequest(tags))
  }
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 30px;
`

const Input = styled.input`
  background: #FFFFFF;
  margin-right: 15px;
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  padding: 15px 10px 15px 5px;
  height: 44px;
  min-width: 800px;
`

const Button = styled.button`
  background-color: ${props => props.disabled ? '#cccccc' : '#333333'};
  color: ${props => props.disabled ? '#666666' : 'white'};
  padding: 15px 10px;
  width: 140px;
`

class SearchBox extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchTag = this.searchTag.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  searchTag () {
    this.props.getPhotos(this.state.value)
    this.setState({value: ''})
  }

  render () {
    return (
      <InputContainer>
          <Input value={this.state.value} onChange={this.handleChange} type="text" placeholder="What are you looking for?" />
          <Button type="submit" onClick={this.searchTag}>
            Search
          </Button>
      </InputContainer>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)