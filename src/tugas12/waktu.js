import React, { Component } from 'react';

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
      if(this.state.time < 8 ){
          this.componentWillUnmount();
      }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date()
    });
  }


  render(){
    return(
      <>
      {this.state.time > 17 &&
      <table>
          <tr>
              <td style={{textAlign : "left"}}> <h1>Sekarang Jam {this.state.date.toLocaleTimeString()}</h1></td>
              <td style={{paddingLeft: '620px'}}> <h1>Hitung Mundur : {this.state.time}</h1></td>
          </tr>
      </table>
      }
      </>
    )
  }
}

export default Timer