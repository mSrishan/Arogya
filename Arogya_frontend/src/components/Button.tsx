import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-pink-600 to-red-600 px-4 py-2 rounded text-white hover:from-sky-500 hover:to-fuchsia-300 transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
