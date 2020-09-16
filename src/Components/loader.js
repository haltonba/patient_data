import React, {Component} from 'react';
import '../App.css';

export default class Loader extends Component {

  render() {
    return(
        <div id="loader-view">
            <section className="loader-container">
                <span className="loader"></span>
            </section>
        </div>
    )
  }
}