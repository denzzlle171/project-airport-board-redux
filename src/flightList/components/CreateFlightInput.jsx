import React,{useState}  from 'react';
import { useSearchParams } from 'react-router-dom';


const CreateFlightInput = () =>{

  const [value, setValue] = useState("")

  const [searchParam, setSearchParam] = useSearchParams();

  
   const handleChange = (event) => {
     setValue(event.target.value);
     
  };

  const handleTaskCreate = () => {
    if (value) {
      setSearchParam({ search: value })
    } else{
    setSearchParam({})};
    
   };

    return (
      <div className="create-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="create-search__input"
          placeholder="Airline, destination or flight #"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          className="btn create-search__btn"
          onClick={handleTaskCreate}
        >
          SEARCH
        </button>
      </div>
    );
}

export default CreateFlightInput;

