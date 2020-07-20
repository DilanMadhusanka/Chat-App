import React from 'react';
import ChatMessageBox from './ChatMessageBox/ChatMessageBox'
// Re-using my ErrorBoundary Component 
// import ErrorBoundary from 'react-error-boundary';

class App extends React.Component {

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <ChatMessageBox/>
    )
  }
}

export default App;
