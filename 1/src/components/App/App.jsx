import { Component } from 'react'
import data from '../../data.json'
import { Statistics } from '../Stats/Stats'
export class App extends Component{
  render(){
  return(
    <Statistics label='label' data={data}></Statistics>
  )}
}