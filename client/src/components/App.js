import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import Projects from './Projects';
import Contact from './Contact';
import Download from './Download';
import Confirm from './Confirm';


class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        formSubmitted: false
      }
    }

    renderContact(){
      if(!this.state.formSubmitted){
        return(
          <Contact 
          onSubmit={() => this.setState({ formSubmitted: true})}
          />
        ) 
      } return (
          <Confirm 
          onCancel={() => this.setState({ formSubmitted: false})}/>
      )
    }
    
    render(){ 
      return (
        <div>
          <BrowserRouter>
            <div>
                <Projects />
                <section id="contact">
                <h1 id="contact-label" style={{ textAlign: 'center' }}><em>CONTACT ME</em></h1>
                <hr className="line-blue-left"></hr>
                <div className="container">
                    <div className="row">
                        <Download />
                        {this.renderContact()}
                    </div>
                </div>
                </section>
            </div>
          </BrowserRouter>
        </div>
    )
  }
}

export default reduxForm({
    form: 'contactForm',
})(App);