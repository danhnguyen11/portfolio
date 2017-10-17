import React from 'react';

const Download = () => {
    return (
        <div className="col-md-4 col-sm-12" id="btn-download">
            <a href="https://drive.google.com/uc?export=download&id=0B0_axXhapkIwUk9rZ3VKdXNFeWs"><button type="button" id="btn-cl" className="button-download btn btn-outline-info btn-lg">
                <i className="fa fa-file-text-o fa-3x" style={{ marginTop: '10px' }} aria-hidden="true"></i>
                <p style={{ marginTop: '20px' }}>COVER</p>
                <p style={{ marginTop: '-15px' }}>LETTER</p>
            </button></a>
            <br/>
            <a href="https://drive.google.com/uc?export=download&id=0B0_axXhapkIwZC1qTjRJTDh2RW8"><button type="button" id="btn-rem" className="button-download btn btn-outline-info btn-lg">
                <i className="fa fa-file-text-o fa-3x" aria-hidden="true"></i>
                <p style={{ marginTop: '20px'}} >RESUME</p>
            </button></a>
        </div>
    )

}

export default Download;