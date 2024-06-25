import React from "react"

interface ErrorBoundaryState {
  hasError: boolean
}
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren & { fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo)
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    // Return children components in case of no error

    return this.props.children
  }
}
