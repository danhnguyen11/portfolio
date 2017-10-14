import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Confirm extends Component {
   
    componentDidMount(){
        this.props.sendMessage(this.props.contactValues);
    }
    
    render(){
        return (
            <div className="col-md-8 col-sm-12">
                <i id="sent-icon" className="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
                <br />
                <p id="ty-sent">Thank you! Your message has been sent.</p>
                <br />
                <button 
                id="btn-resend"
                className="btn btn-outline-success"
                onClick={this.props.onCancel}
                >
                Send Another Message  <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i></button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        contactValues: state.form.contactForm.values
    }      
}

export default connect(mapStateToProps, actions)(Confirm);