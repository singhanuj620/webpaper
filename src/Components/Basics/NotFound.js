import React from 'react'
import '../../Css/Basics/NotFound.css';
import NotFoundImg from '../../Assests/Images/Basics/notfound.svg';
import { Button } from 'reactstrap';
const NotFound = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="notfound_container">
            <div className="notfound_title">
                Oopss , Something is broken !!
            </div>
            <div className="notfound_buttons">
                <Button color="warning" outline onClick={() => (goBack())}>Go Back</Button>
                <a href="/"><Button color="info">Home</Button></a>
            </div>
            <div>
                <img src={NotFoundImg} alt="Error Page" className="notfound_svg" />
            </div>

        </div>
    )
}

export default NotFound
