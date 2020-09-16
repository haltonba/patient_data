import React, {Component} from 'react';
import '../App.css';
import Record from '../Components/record';

export default class PatientContainer extends Component {

    renderRecords = () => {
        let records = this.props.records.sort((a, b) => (b.timestamp > a.timestamp) ? 1 : -1)
        return records.map((record, index) => {
            return <Record key={record.id} record={record} index={index + 1}/>
        })
    }

  render() {
    return(
      <div>
        <section className="patient-profile-container" id="profile-view">
            <div id="patient-profile">
                <h1 id="patient-name">{this.props.records[0].userName}</h1>
                <h3 id="patient-dob">DOB: {this.props.records[0].userDob}</h3>
                <h3 id="patient-height">Height: {this.props.records[0].meta.height}</h3>
            </div>

            <table id="patient-records-table">
                <thead id="table-header">
                    <tr>
                        <th>SL</th>
                        <th>Date</th>
                        <th>Diagnosis</th>
                        <th>Weight</th>
                        <th>Doctor</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {this.renderRecords()}
                </tbody>
            </table>
        </section>
      </div>
    )
  }
}