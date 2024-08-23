import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to another website
    window.location.href = "https://www.cleanwindow.pro";
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
