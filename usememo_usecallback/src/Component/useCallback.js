import React from "react";

const UseCallback = ({name,addAgeHandler}) => {
    // const [Counter, setCounter] = useState(0);


    return (
        <div className='row'>
        <div className='col'>
          <button onClick={addAgeHandler}>Add age</button>
        </div>
        <div className='col'>
          Name : {name.name}
        </div>
        <div className='col'>
          Age : {name.age}
        </div>
      </div>
    );
};

export default UseCallback;