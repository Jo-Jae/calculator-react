const Button = ({ name, onClickButton }) => {
  return (
    <button
      className={`bg-gray-200 w-10 h-10  rounded-md flex justify-center items-center shadow-sm 
      ${name === "+" && "bg-red-500"}
      ${name === "-" && "bg-orange-500"}
      ${name === "*" && "bg-yellow-500"}
      ${name === "/" && "bg-green-500"}`}
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;

// const Button = ({ name, onClickButton }) => {
//   return (
//     <button
//       className="bg-gray-200 w-10 h-10 rounded-md flex justify-center items-center shadow-sm"
//       onClick={onClickButton}
//     >
//       {name}
//     </button>
//   );
// };

// export default Button;
