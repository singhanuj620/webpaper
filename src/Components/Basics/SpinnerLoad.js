import React from 'react'
import { Spinner } from 'reactstrap';
import '../../Css/Basics/SpinnerLoad.css';
const SpinnerLoad = ({ message }) => {
    return (
        <div className="spinner">
            <div><Spinner /></div>&nbsp;
            <div>{message} Loading. Please Wait !</div>
        </div>
    )
}

export default SpinnerLoad
