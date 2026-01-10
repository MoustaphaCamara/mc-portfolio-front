import React from 'react';

type ButtonProps<T extends string> = {
  content: string; // translated label
  value: T; // enum value (e.g., portfolio / skills)
  status: T;
  setStatus: React.Dispatch<React.SetStateAction<T>>;
};

const Button = <T extends string>({
  content,
  value,
  status,
  setStatus,
}: ButtonProps<T>) => {
  return (
    <div
      onClick={() => setStatus(value)}
      className={`app__btn ${status === value ? 'app__btn-active' : ''}`}>
      {content}
    </div>
  );
};

export default Button;
