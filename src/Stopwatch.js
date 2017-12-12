import React, {Component} from 'react';
import './App.css';


class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.end)
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.end));
  }

  leading0(num) {
    return num < 10 ? '0' + num : num
  }
    getTimeUntil(end) {
      const time = Date.parse(end) - Date.parse(new Date());
      const milliseconds = Math.floor((time/1000) % 60) * 1000);
      const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60) %60);
      const hours = Math.floor(time/(1000*60*60) %24)
    );

      this.setState({ hours, minutes, seconds, milliseconds });
    }

  render() {
    return (
    <div>
      <div className='Clock-hours'>{this.leading0(this.state.hours)} hours</div>
      <div className='Clock-minutes' >{this.leading0(this.state.minutes)} minutes</div>
      <div className='Clock-seconds'>{this.leading0(this.state.seconds)} seconds</div>
       <div className='Clock-milliseconds'>{this.leading0(this.state.milliseconds)} seconds</div>


   </div>
 )
  }
}

export default Stopwatch;
