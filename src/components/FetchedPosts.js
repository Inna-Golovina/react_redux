import React from 'react'
//import {useDispatch, useSelector} from 'react-redux'
import Post from './Post'
//import {fetchPosts} from '../redux/actions'
//import {Loader} from './Loader'

export default ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить</button>
  }
  return posts.map(post => <Post post={post} key={post}/>)
}

