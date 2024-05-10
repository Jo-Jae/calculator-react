const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 w-10 h-10 rounded-md flex justify-center items-center shadow-md">
      {name}
    </button>
  );
};

export default Button;
