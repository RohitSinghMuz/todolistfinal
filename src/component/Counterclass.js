import React, { Component } from 'react'

 class Counterclass extends Component {
    state={
        count:0,
    }
    Incrementfunction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    Decrementfunction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <>
      <button onClick={this.Incrementfunction}>Increment</button>

      <h2>{this.state.count}</h2>
      <button onClick={this.Decrementfunction}>Decrement</button>


      </>
    )
  }
}

export default Counterclass
