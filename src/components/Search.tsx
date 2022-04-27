import React from "react";

const Search = () =>{
    function handlechange(event :any){
        console.log("value is",event.target.value);
    }
    return(
    <div>
        <input  type="text" placeholder="Search Here" onChange={handlechange}/>
    </div>
    );
};
export default Search;