import React from "react";

interface Props {
    text: string;
}

const Test:React.FC<Props> = ({text}) => {
    return (
        <h2>{text}</h2>
    );
};

export default Test;
