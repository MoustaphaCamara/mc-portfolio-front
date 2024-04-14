import React from "react";

type ButtonProps = {
    content: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    status: string;
};

const Button = ({content, status, setStatus}: ButtonProps) => {
    return (
        <div
            onClick={() => setStatus(content)}
            className={`app__btn ${status === content ? "app__btn-active" : ""}`}
        >
            {content}
        </div>
    );
};

export default Button;
