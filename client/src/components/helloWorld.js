import React from "react";
import { connect } from "react-redux";

const Hello = ({message}) => {
return (
    <div>
        <h1>{message}</h1>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps)(Hello);