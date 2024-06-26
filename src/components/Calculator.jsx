import { useState } from "react";

import Result from "./Result";
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";
import ButtonEnter from "./ButtonEnter";
import ButtonDelete from "./ButtonDelete";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <div className="bg-gray-300 p-4 shadow-md">
      <Result result={result} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <ButtonNumber name="1" result={result} setResult={setResult} />
        <ButtonNumber name="2" result={result} setResult={setResult} />
        <ButtonNumber name="3" result={result} setResult={setResult} />
        <ButtonOperator
          name="+"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
        <ButtonNumber name="4" result={result} setResult={setResult} />
        <ButtonNumber name="5" result={result} setResult={setResult} />
        <ButtonNumber name="6" result={result} setResult={setResult} />
        <ButtonOperator
          name="-"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
        <ButtonNumber name="7" result={result} setResult={setResult} />
        <ButtonNumber name="8" result={result} setResult={setResult} />
        <ButtonNumber name="9" result={result} setResult={setResult} />
        <ButtonOperator
          name="*"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
        <ButtonEnter
          name="Enter"
          operator={operator}
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
        />
        <ButtonNumber name="0" result={result} setResult={setResult} />
        <ButtonDelete name="Del" result={result} setResult={setResult} />
        <ButtonOperator
          name="/"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
      </div>
    </div>
  );
};

export default Calculator;

// import Button from "./Button";
// import Result from "./Result";

// const Calculator = () => {
//   return (
//     <>
//       <Result />
//       <div className="bg-gray-300 grid grid-cols-4 gap-2 p-4 shadow-md">
//         <Button name={1} />
//         <Button name={2} />
//         <Button name={3} />
//         <Button name="+" />
//         <Button name={4} />
//         <Button name={5} />
//         <Button name={6} />
//         <Button name="-" />
//         <Button name={7} />
//         <Button name={8} />
//         <Button name={9} />
//         <Button name="✕" />
//         <Button name="Enter" />
//         <Button name={0} />
//         <Button name="Del" />
//         <Button name="%" />
//       </div>
//     </>
//   );
// };

// export default Calculator;

//fragment 위는 생략가능 아래는 표시할 때. 주로 위 방법으로 사용.

// import { Fragment } from "react";
// import Button from "./Button";
// import Result from "./Result";

// const Calculator = () => {
//   return (
//     <Fragment>
//       <div>
//         <Result />
//         <div className="bg-gray-300 grid grid-cols-4 gap-2 p-4 shadow-lg">
//           <Button name={1} />
//           <Button name={2} />
//           <Button name={3} />
//           <Button name="+" />
//           <Button name={4} />
//           <Button name={5} />
//           <Button name={6} />
//           <Button name="-" />
//           <Button name={7} />
//           <Button name={8} />
//           <Button name={9} />
//           <Button name="✕" />
//           <Button name="Enter" />
//           <Button name={0} />
//           <Button name="Del" />
//           <Button name="%" />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Calculator;
