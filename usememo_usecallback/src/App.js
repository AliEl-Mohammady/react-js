import React, { useMemo, useState,useCallback } from "react";
import usePrevState from "./Hooks/usePrevState";
import UseMemo from './Component/UesMemo/useMemo'
import UseCallback from './Component/useCallback'

export default function App() {

  const [term, setTerm] = useState("");
  const prevTerm=usePrevState(term);
  const [Counter, setCounter] = useState(0);
  const [user, setUser] = useState({name: "Ali"});

  let name=useMemo(() => {       //UseMemo is used for performance to prevent create new variable with different reference
    return user;
  }, [user]);

  const addNumber = useCallback(() => {
    setCounter(Counter + 1);
    console.log("hello from useCallback");
    }, [Counter]);

  const addAgeHandler = useCallback(() => {
    setUser((prevTerm)=>{
      if (prevTerm.age) {
        return {...prevTerm, age: prevTerm.age + 1};  
      }else {
        return {...prevTerm, age: 30};
      }
    })
    }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='my-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Search Input
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Current Term</th>
                <th scope='col'>Prev Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>{term}</th>
                <td>{prevTerm}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <UseMemo term={term} />
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <UseCallback  addAgeHandler={addAgeHandler} name={name}/>
        </div>
      </div>
    </div>

  );
}
