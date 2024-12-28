import React,{useEffect,useState} from "react";
import axios from "axios";

export default function App() {
  const [searchTerm,setSearchTerm]=useState('ali');  
  const [debounceTechnique,setDebounceTechnique]=useState('ali');
  const [searchResults,setSearchResults]=useState([]);

  useEffect(() => {
    const timeout=setTimeout(() => {
      setDebounceTechnique(searchTerm);
    }, 5000);
    return (() => {
      clearTimeout(timeout);
    })
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://en.wikipedia.org/w/api.php`,{
            params: {
              action: "query",
              format: "json",
              list: "search",
              origin: "*",
              srsearch: debounceTechnique
            }
          }
        );
        console.log(response);
        setSearchResults(response.data.query.search);
      } catch (error) {
        alert(`${error} in fetching data`);
      }
    }

    fetchData();

    // Debounce Technique to prevent multiple API calls and make results after interval time
    // const debounceTechnique=setTimeout(() => {
    //   if (searchTerm){
    //   fetchData();
    // }
    // }, 5000);
    // return (() => {
    //   clearTimeout(debounceTechnique);
    // })
    

  }, [debounceTechnique]);


  let counter = 0;
  const searchHandler = searchResults.map((result) => {
    counter++;
    return (
      <tr key={result.pageid}>
        <th scope='row'>{counter} </th>
        <td>{result.title}</td>
        <td>
         {/* to prevent xxs */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />  
        </td>
      </tr>
  )});


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
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search'
              value={searchTerm}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Desc</th>
              </tr>
            </thead>
            <tbody>
              {searchHandler}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
