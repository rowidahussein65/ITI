// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center mt-5">
          <h2 className="text-danger">Oops! Something went wrong</h2>
          <p>Try refreshing the page or come back later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
