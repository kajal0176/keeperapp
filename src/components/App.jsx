import React,{useState} from 'react';
import Header from './header';
import Footer from './footer';
import Notes from './note';

import CreateArea from './CreateArea';
function App(){
    const[notes,setNotes]=useState([]);
    
function addnote(newNote){

setNotes(prevNote=>{
    return  [...prevNote, newNote];
  });

}
function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

    return(
        <div>
   <Header/>
  <CreateArea onAdd={addnote}/>
  {notes.map((noteItem,index)=>{
    return <Notes
    key={index}
    id={index}
    title={noteItem.title}
    content={noteItem.content} 
    onDelete={deleteNote}/>;
  
   })}
   
   <Footer/>
        </div>
       
    )
}
export default App;