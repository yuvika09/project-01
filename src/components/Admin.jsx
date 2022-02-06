import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';

const Admin = () => {
    const { head, name } = useParams();
    const location = useLocation();
    console.log(location);
    const history = useHistory();
    console.log(history);
    return (
        <>
            <div>
                This is only accessible if you are an admin.
                <h2>This is {head}'s and {name} page. </h2>
                <h3>Location is {location.pathname}</h3>
                <h3>click here to go back</h3>
                <button onClick={() => history.goBack()}>
                Go Back
                </button>
            </div>
        </>
    );
};

export default Admin;