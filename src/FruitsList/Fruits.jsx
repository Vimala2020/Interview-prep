import {useState} from 'react';
export default function Fruits() {

    const fruits = ["Apple", "Mango", "Cherry", "Banana"]
    const [search, setSearch]= useState("")
    const handleChange = (e)=>{
       const searchValue = e.target.value;
        setSearch(searchValue);

    }

    const filteredData = fruits.filter((fruit)=>(
        fruit.toLowerCase().includes(search.toLowerCase())
    ))
    
  return (
    <>
        <input type="text" value={search} onChange={handleChange}/>
        {
            filteredData.map((fruit, index)=>(
                <p key={index}>{fruit}</p>
            ))
        }
    </ >
 );
}