import React from 'react';

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
