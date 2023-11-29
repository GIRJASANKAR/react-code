import { useState } from "react";
import reactLogo from "./assets/edit.png";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [totalTodo, setTotaltodo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      totalTodo.push(inputValue);
      setTotaltodo(totalTodo);
      setInputValue("");
    }
  };

  const clearAll = () => {
    setTotaltodo([]);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="bg-gradient-to-r h-screen from-amber-500 to-red-500  w-full flex justify-center items-center">
        <div className="bg-white w-96 h-72 overflow-auto rounded-lg">
          <div className="px-8 py-4 relative">
            <img
              className="h-6 w-6 absolute left-[2.75rem] top-[1.75rem]"
              src={reactLogo}
              alt="icon"
            />
            <input
              type="text"
              className="w-full p-3 pl-10 border placeholder:pl-1 rounded-md"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a New Task + Enter "
              onKeyDown={handleEnterKey}
            />
          </div>

          <div className="px-8 flex justify-between items-center font-light border-b pb-3">
            <div className="hover:text-red-900 hover:font-semibold">ALL</div>
            <div className="hover:text-red-900 hover:font-semibold">
              Pending
            </div>
            <div className="hover:text-red-900 hover:font-semibold">
              Completed
            </div>
            <button
              className="bg-gradient-to-r font-medium px-4 py-2 rounded-lg text-white from-amber-500 to-red-500 "
              type="button"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>

          <div
            className={
              isChecked ? "line-through px-8  font-light " : "px-8  font-light "
            }
          >
            {totalTodo.map((x) => {
              return (
                <div className=" py-4 border-b " key={x}>
                  <input onChange={handleCheckboxChange} type="checkbox" /> {x}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

