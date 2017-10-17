import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import projects from '../utils/projects';

class Projects extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(Title, Img, Description, Technology){
        this.setState({ 
            modalIsOpen: true,
            Title,
            Img,
            Description,
            Technology
        });
    }
    
    closeModal(){
        this.setState({ modalIsOpen: false});
    }

    renderModal(){
        if(!this.state.modalIsOpen){
            return null;
        } return(
            
            <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Projects List"
            className="modal"
            >
            
            <img src={this.state.Img} alt="modal-img" id="modal-img"/>
            <hr />
            <h1 id="title-modal" ref={subtitle => this.subtitle = subtitle}>{this.state.Title}</h1>
            <hr />
            <p id="description-modal"><strong><u>Description</u></strong>: {this.state.Description}</p>
            <p id="tech-modal"><strong><u>Technology</u></strong>: {this.state.Technology}</p>
            <div id="buttons-modal">
                <button id="btn-app-modal" className="btn btn-outline-info">Try the App</button>
                <button id="btn-git-modal" className="btn btn-outline-warning">GitHub</button>
                <button id="btn-close-modal" className="btn btn-outline-danger" onClick={this.closeModal}>Cancel</button>
            </div>
            
            </Modal>
            
        )
    }

    renderCard(cards){
        return _.map(cards, ({ Title, Img, Description, Technology }) => {
            return (
                <div key={Title} className="col-md-4 col-sm-12 card" style={{ width: '20rem' }} id="card-project">
                    <img className="card-img-top" src={Img} alt="Card cap" id="img-project" />
                    <div className="card-body">
                        <h4 className="card-title">{Title}</h4>
                        <p className="card-text">{Description.substring(0, 100) + '...'}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <button
                            className="btn btn-outline-success" 
                            id="learn"  
                            onClick={() => this.openModal(Title, Img, Description, Technology)}
                            >
                            Learn more <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render() {
      return (
          <section id="projects">
              <h1 id="projects-label" style={{ textAlign: 'center' }}><em>PROJECTS</em></h1>
              <hr className="line-blue-left"></hr>
              <div className="container">
                  <div className="row">
                      {this.renderCard(projects)}
                  </div>
              </div>
              {this.renderModal()}
          </section>
        )
    }
}


export default Projects;