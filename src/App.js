import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./DialogBox";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
`;

/**
 * React functional component for App.
 * @returns {JSX.Element} The JSX element for the App component.
 * @throws {Error} If there is an issue with setting attributes.
 */
const App = () => {
  const [title, setTitle] = useState("Title from React!");
  const [text, setText] = useState("Hello from React!");
  const [variant, setVariant] = useState("default");
  const myElementRef = useRef(null);

  useEffect(() => {
    const element = myElementRef.current;
    if (element) {
      element.setAttribute("title", title);
      element.setAttribute("text", text);
      element.setAttribute("variant", variant);
    }
  }, [title, text, variant]);
  return (
    <AppContainer>
      <header className="App-header">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title here"
          style={{ marginBottom: "1em" }}
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here"
          style={{ marginBottom: "1em" }}
        />
        <select value={variant} onChange={(e) => setVariant(e.target.value)}>
          <option value="default">Info (Default)</option>
          <option value="info-on-dark">Info On Dark</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
        <dialog-box ref={myElementRef}></dialog-box>
      </header>
    </AppContainer>
  );
};

export default App;
