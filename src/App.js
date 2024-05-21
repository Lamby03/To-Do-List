import React, { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

const App =()=> {

const [inputList, setinputList]= useState("");
const [Items, setItems]= useState([]);

const itemEvent = (event) =>{
  setinputList(event.target.value)
};

const listOfItems = () =>{
  setItems((oldItems) => {
    return [...oldItems, inputList];
  }); 
  setinputList('');
};

const deleteItems = (id)=>{
  console.log('deleted');

  setItems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
        return index !== id;
    })

  })
};

  return ( 
  <>
  <div className='main_div'>
    <div className='center_div'>
      <br />
      <h1> ToDo List</h1>
      <br />
      <input type='text' placeholder='Add Items' 
      value={inputList}
      onChange={itemEvent}/>
      <button onClick={listOfItems}> + </button>


      <ol>
        {/* <li> {inputList} </li> */}


        {Items.map((itemval, index) =>{
          return <ToDoLists key={index} id={index} onSelect={deleteItems}
            text={itemval}
          
          />;
} )}

      </ol>
    </div>
</div>
</>
  );
};

export default App;
