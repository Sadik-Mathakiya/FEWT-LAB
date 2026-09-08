import React, { useState } from "react";


function Calculater() {
  const [exp, setexp] = useState("");
  const handleclick = (value) => {
    if (value === "=") {
      try {
        setexp(eval(exp).toString());
      } catch {
        setexp("Error");
      }
    } else if (value === "AC") {
      setexp("");
    } else if (value === "<-") {
      setexp(exp.slice(0, -1));
    } else {
      setexp(exp + value);
    }
  };
  return (
    <>
      <div className="Main">
        <div>
          <input type="text" value={exp} readOnly />
        </div>
      </div>
      <table>
      <tr>
      <td><button onClick={() => handleclick("AC")}>AC</button></td>
      <td></td>
      <td><button onClick={() => handleclick("%")}>%</button></td>
        </tr>
        <tr>

      <td><button onClick={() => handleclick("/")}>/</button></td>
      <td><button onClick={() => handleclick("7")}>7</button></td>
      <td><button onClick={() => handleclick("8")}>8</button></td>
        </tr>
        <tr>
            
      <td><button onClick={() => handleclick("9")}>9</button></td>
      <td><button onClick={() => handleclick("*")}>*</button></td>
      <td><button onClick={() => handleclick("4")}>4</button></td>
        </tr>
        <tr>

      <td><button onClick={() => handleclick("5")}>5</button></td>
      <td><button onClick={() => handleclick("6")}>6</button></td>
      <td><button onClick={() => handleclick("-")}>-</button></td>
        </tr>
        <tr>

      <td><button onClick={() => handleclick("1")}>1</button></td>
      <td><button onClick={() => handleclick("2")}>2</button></td>
      <td><button onClick={() => handleclick("3")}>3</button></td>
        </tr>
        <tr>

      <td><button onClick={() => handleclick("+")}>+</button></td>
      <td><button onClick={() => handleclick("0")}>0</button></td>
      <td><button onClick={() => handleclick("=")}>=</button></td>
        </tr>
      </table>
    </>
  );
}

export default Calculater;
