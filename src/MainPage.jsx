
import React, { useState } from "react";
import { Text } from "./components/Text";

const MainPage = () => {
  const [toggleMood, setToggleMood] = useState(false);

  const handleToggleMood = () => {
    setToggleMood((prevToggle) => !prevToggle);
    // setToggleMood(!toggleMood)
  };

  return (
    <div>
      <Text mood={toggleMood ? "sad" : "happy"} />
      <button onClick={handleToggleMood}>Change my mood</button>
    </div>
  );
};

export default MainPage;