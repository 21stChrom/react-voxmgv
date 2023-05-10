import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
    const [iframeVisible, setIframeVisible] = useState(false);

      const handleInputChange = (e) => {
          setText(e.target.value);
            };

              const handleSave = () => {
                  // Implement save functionality here
                      console.log('Save:', text);
                        };

                          const handleCopy = () => {
                              // Implement copy functionality here
                                  console.log('Copy:', text);
                                    };

                                      const handlePaste = () => {
                                          // Implement paste functionality here
                                              console.log('Paste:', text);
                                                };

                                                  const toggleIframe = () => {
                                                      setIframeVisible(!iframeVisible);
                                                        };

                                                          return (
                                                              <div className="App">
                                                                    <h1>React App with Picture-in-Picture</h1>
                                                                          <div className="text-library">
                                                                                  <textarea
                                                                                            value={text}
                                                                                                      onChange={handleInputChange}
                                                                                                                placeholder="Enter text..."
                                                                                                                        />
                                                                                                                                <button onClick={handleSave}>Save</button>
                                                                                                                                        <button onClick={handleCopy}>Copy</button>
                                                                                                                                                <button onClick={handlePaste}>Paste</button>
                                                                                                                                                      </div>
                                                                                                                                                            <div className={`iframe-window ${iframeVisible ? 'visible' : ''}`}>
                                                                                                                                                                    <button onClick={toggleIframe}>Toggle Picture-in-Picture</button>
                                                                                                                                                                            <iframe src="your-picture-url" title="Picture-in-Picture" />
                                                                                                                                                                                  </div>
                                                                                                                                                                                      </div>
                                                                                                                                                                                        );
                                                                                                                                                                                        };

                                                                                                                                                                                        export default App;
