import React, { Component } from 'react'
import { Shoes } from '../../ListShoes/ListOfShoes'
import Body from './Body'
export default class Main extends Component {
    constructor(){
        super()
        this.state={
            Shoes10k:Shoes
        }
    }
  render() {
    return (
      <div>
        <Body Shoes5k={this.state.Shoes10k}/>
      </div>
    )
  }
}
