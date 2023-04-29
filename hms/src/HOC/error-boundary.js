import React, { useState } from "react";
import PropTypes from "prop-types";

function ErrorBoundary({ errorElement, children }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return errorElement;
  }

  return children;
}

ErrorBoundary.propTypes = {
  errorElement: PropTypes.element,
  children: PropTypes.node.isRequired,
};

ErrorBoundary.defaultProps = {
  errorElement: <h1>Something went wrong.</h1>,
};

export default ErrorBoundary;
