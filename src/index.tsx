import React from "react";
import ReactDOM from "react-dom";
import Test from "./components/Test";

const App:React.FC = () => {
    const text = "text";
    return (
        <>
            <h1>hello world</h1>
            <Test text={text} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));