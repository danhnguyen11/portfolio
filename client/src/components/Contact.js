import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm, Field } from 'redux-form';


class Contact extends Component{

    required = value => value ? undefined : 'Please provide a value!';

    renderField = ({ input, label, type, name, meta: { touched, error} }) => (
        (type !== "textarea") ?
        (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} key={name} placeholder={label} type={type} className="form-control"/>
            <div style={{marginBottom:'20px',color:'red'}}>
                {touched && error}
            </div>
          </div>
        </div> ) :
           (<div>
           <label>{label}</label>
           <div>
             <textarea {...input} key={name} placeholder={label} type={type} className="form-control" rows="5"/>
             <div style={{marginBottom:'20px',color:'red'}}>
                 {touched && error}
             </div>
           </div>
         </div> 
        )
    )
    
       
    render() {
        

        return(
            <div className="col-md-8 col-sm-12">
                <form 
                onSubmit={(e) => {e.preventDefault(); this.props.handleSubmit(this.props.onContactSubmit);}}
                onKeyPress={e => {if(e.key === 'Enter') e.preventDefault();}}
                >
                    <div className="form-group">
                        <Field component={this.renderField} type="text" label="Name" name="name" validate={this.required}/>
                    </div>
                    <div className="form-group">
                        <Field component={this.renderField} type="email" label="Email" name="email" validate={this.required} />
                    </div>
                    <div className="form-group">
                        <Field component={this.renderField} type="text" label="Subject" name="subject" validate={this.required} />
                    </div>
                    <div className="form-group">
                        <Field component={this.renderField} type="textarea" label="Message" name="message" validate={this.required}/>
                    </div>
                    <div className="form-group">
                        <button 
                        key="button" 
                        className="form-control btn btn-outline-primary"
                        >
                        Submit</button>
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