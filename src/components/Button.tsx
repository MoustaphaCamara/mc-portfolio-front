const Button = ({index, content, setStatus, status }) => {
    return (
        <div
            key={index}
            onClick={() => setStatus(content)}
            className={`app__btn ${status === content ? "app__btn-active" : ""}`}
        >
            {content}
        </div>
    );
};

export default Button;
