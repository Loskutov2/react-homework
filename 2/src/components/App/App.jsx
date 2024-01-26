import { Component } from 'react'
import data from '../../data.json'
import { FriendList } from '../FriendList/FriendList'
export class App extends Component{
  render(){
  return(
    <FriendList data={data}></FriendList>
  )}
}