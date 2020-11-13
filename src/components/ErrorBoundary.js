import React from 'react';

/* Make sure you pass a unique key to the ErrorBoundary 
so that when the error is resolved, a new ErrorBoundary is 
rendered and the application doesn't get blocked */
export default class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;

    // if there is an error, render passed in FallbackComponent
    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }

    // Otherwise, render children
    return this.props.children;
  }
}
