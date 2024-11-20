import { useState } from "react";
import "./recruitmentButton.css";

const RecruitmentButton = ({ items, status }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    index: "",
  });

  const handleValueChange = (value,index) => {
    setSelectedOption({ value, index });
  };
  return (
    <>
      <select
        className={`recruitmentBtn-container recruitmentBtn-${selectedOption.index}`}
        onChange={(e) => handleValueChange(e.target.value,e.target.selectedIndex)}
        disabled={status}
      >
        {items?.map((value, i) => (
          <option
            className={`recruitmentBtn-${i}`}
            value={value}
            index={i}
          >
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default RecruitmentButton;
