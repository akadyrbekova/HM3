const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-[161px] h-[39px] border border-black flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default Button;
