import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("UI crash:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-sm text-red-200 bg-red-900/20 border border-red-700/40 rounded">
          <div className="font-bold">Something broke in the UI.</div>
          <div className="mt-2 whitespace-pre-wrap">{String(this.state.error)}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
