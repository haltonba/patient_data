import React, {Component} from 'react';
import './App.css';
import Select from './Components/select';
import Loader from './Components/loader';
import PatientContainer from './Containers/patientContainer';

export default class App extends Component {

  state = {
    patientSelected: -1,
    patientData: [],
    loaderActive: false
  }

  toggleLoader = () => {
    this.setState({loaderActive: true})
  }

  handleSubmit = async (patientId) => {
    let pageCount = 100
    let currentPage = 1
    let data = []
    while (currentPage <= pageCount) {
      await fetch(`https://jsonmock.hackerrank.com/api/medical_records?userId=${patientId}&page=${currentPage}`)
      .then(response => response.json())
      .then(json => {
        data = data.concat(json.data)
        pageCount = json.total_pages
        currentPage++
      })
    }
    this.setState({
      patientSelected: patientId,
      patientData: data,
      loaderActive: false
    })
  }

  render() {
    return(
      <div className="App">
        <nav className="app-nav">
          <h1 className="app-title">Patient Records</h1>
        </nav>
        <Select handleSubmit={this.handleSubmit} toggleLoader={this.toggleLoader}/>
        {this.state.loaderActive ? <Loader/> : null}
        {this.state.patientSelected > 0 ? <PatientContainer records={this.state.patientData}/> : null}
      </div>
    )
  }

}
