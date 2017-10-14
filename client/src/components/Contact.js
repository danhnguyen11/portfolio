import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm, Field } from 'redux-form';


class Contact extends Component{
    
    render() {
        return(
            <div className="col-md-8 col-sm-12">
                <form onSubmit={() => this.props.handleSubmit(this.props.onContactSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field key="name" component="input" type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field key="email" component="input" type="email" className="form-control" name="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <Field key="subject" component="input" type="text" className="form-control" name="subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <Field key="message" component="textarea" type="text" className="form-control" rows="5" name="message" />
                    </div>
                    <div className="form-group">
                        <button key="button" className="form-control btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default reduxForm({
    form: 'contactForm',
    destroyOnUnmount: false
})(Contact);