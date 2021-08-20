//Higher Order Component: is a componente that renders another component
//Reuse code 
//Render Hijacking
//Prop manipulation 
//Abstarct state 


import React  from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is : {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.idAdminProp ? <p>This is private info please dont share!!</p> : null}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login!!!</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



ReactDOM.render(<AuthInfo isAuthenticated={true} info="dio can" />, document.getElementById('app'));