/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return props => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuth = (WrappedComponent) => {
  return props => (
    <div>
      { props.isAuth ? (<WrappedComponent {...props} />) : <p>Please login!</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="These are the details" />, document.getElementById('app'));
