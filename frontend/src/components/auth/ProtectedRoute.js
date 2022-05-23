import { React, Fragment } from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({
  auth: { isAuthenticated, isLoading, user },
  authenticatedAs,
  children,
}) => {
  if (isLoading) {
    return <Fragment></Fragment>;
  } else {
    const { role } = user;
    if (!isAuthenticated || role !== authenticatedAs) {
      return <Navigate to='/' replace />;
    }

    return children;
  }
};

ProtectedRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
