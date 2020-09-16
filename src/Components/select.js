import React, {Component} from 'react';
import '../App.css';

export default class Select extends Component {

    state = {
        patientSelected: -1
    }

    handleSelectChange = (event) => {
        this.setState({
            patientSelected: event.target.value
        })
    }

    handleClick = () => {
        if (this.state.patientSelected > 0) {
            this.props.toggleLoader()
            this.props.handleSubmit(this.state.patientSelected)
        }
    }

  render() {
    return(
      <div>
        <section className="flex select-form-container" id="patient-filter">
            <div className="select">
                <select id="patient-select" value={this.state.patientSelected} onChange={this.handleSelectChange}>
                    <option disabled value="-1">Select User</option>
                    <option value="1">John Oliver</option>
                    <option value="2">Bob Martin</option>
                    <option value="3">Helena Fernandez</option>
                    <option value="4">Francesco De Mello</option>
                </select>
            </div>

            <button type="submit" id="submit-btn" onClick={this.handleClick}>
                Show
            </button>
        </section>
      </div>
    )
  }
}