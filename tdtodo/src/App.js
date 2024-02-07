import './App.css';
import'@fortawesome/fontawesome-free/css/all.css';
import {Fragment, useState} from 'react'; //Ajout de useState
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  //Ajout d'un state qui contient quelques tâches
  const [todos,setTodos]=useState([
    {done:false, description:'Trouver un job'},
    {done:true, description:'Apprendre React.JS'},
    {done:true, description:'Découvrir Formacitron'},
  ]);
  //Ajout d'une méthode addTodo:
  const addTodo=(todo)=>{
    const tmpTodos=[...todos];//On copie les todos
    tmpTodos.push({done:false,description:todo})//On ajoute un nouveau todo
    setTodos(tmpTodos);//On met à jour le state avec la nouvelle liste 
  };
  return (
    <>
      <Header/>
      <main>
          <Form addTodo={addTodo}/>{/*On passe addTodo au composant Form*/}
          <List todos={todos}/>          
      </main>
      <Footer/>      
    </>  
  );
}

export default App;
