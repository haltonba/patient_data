import React, {Component} from 'react';
import '../App.css';

export default class Record extends Component {

  convertDate = (timestamp) => {
    let dateArray = new Date(timestamp).toLocaleDateString("en-US").split("/")
    let temp = dateArray[0]
    dateArray[0] = dateArray[1]
    dateArray[1] = temp
    return dateArray.join("/")
  }

  render() {
    return(
        <tr>
          <td>{this.props.index}</td>
          <td>{this.convertDate(this.props.record.timestamp)}</td>
          <td>{this.props.record.diagnosis.name}({this.props.record.diagnosis.id})</td>
          <td>{this.props.record.meta.weight}</td>
          <td>{this.props.record.doctor.name}</td>
        </tr>
    )
  }
}