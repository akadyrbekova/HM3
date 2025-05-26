const Button = ({ all, active, completed }) => {
  return (
    <div className="w-[161px] h-[39px]  border border-black  flex items-center justify-center">
      {all}
      {active}
      {completed}
    </div>
  );
};

export default Button;
