import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"


const FiltersContext = createContext();

export const useFilters = () => {
  return useContext(FiltersContext);
};

export const FiltersContextProvider = ({children})=>{
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [keywords, setKeywords] = useState([])
    //drilling
    const [selectedDrillingRigs, setselectedDrillingRigs] = useState([]);
    const [selectedDrillingPositions, setselectedDrillingPositions] = useState([]);
    const [selectedRigPositions, setselectedRigPositions] = useState([]);

    return(
    <FiltersContext.Provider value={{ selectedIndustries, setSelectedIndustries,
    keywords, setKeywords,
    selectedDrillingRigs, setselectedDrillingRigs,selectedDrillingPositions, setselectedDrillingPositions,selectedRigPositions, setselectedRigPositions,
    
    }}>
        {children}
    </FiltersContext.Provider>
    )

}