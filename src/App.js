import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <div className="App">
      <div className="app-header">
        <h1>Modal Popup</h1>
        <button className="btn" onClick={() => setModalVisible(true)}>Open Modal</button>
      </div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <p>Modal</p>
              <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
            </div>
            <div className="modal-body">
              <p>You are welcome</p>
              <p>Core front end web technologies are:</p>
              <p>HTML, CSS and JavaScript</p>
            </div>
            <div className="modal-footer">
              <p>&copy; &#160;<span className="year">{thisYear}</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;