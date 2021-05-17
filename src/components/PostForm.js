import React from 'react'
//import {connect} from 'react-redux'
//import {createPost, showAlert} from '../redux/actions'
//import {Alert} from './Alert'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  submitHandler = e => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Заголовок поста</label>
          <input type="text" className="form-control" id="title"/>
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}