import { useState } from "react";
import "./App.css";
import Foodlist from "./components/foodlist";

function App() {
  let [foodlist, setfoodlist] = useState([
    "FRUITS",
    "VEGETABLES",
    "DAL",
    "RICE",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onClickadd = () => {
    if (inputValue.trim() !== "") {
      setfoodlist([...foodlist, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <Foodlist
        item={foodlist}
        onClickadd={onClickadd}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default App;
