import "./App.css"
import React from "react"
import {Button} from "./components/Button/Button"

function App() {
return (
    <div style={{display: 'flex', justifyContent: "center", flexDirection:"column"}}>
      <h1 className="title"> Welcome to Feras' Quiz</h1>
      <Button />
    </div>
  );
}
export default App;
