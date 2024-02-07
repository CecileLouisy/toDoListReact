import {useState} from 'react';
const Form = ({addTodo})=>{
    //On récupère "addTodo" via les props
    const[todo,setTodo]=useState('');//On ajoute un 'state' pour gérer ce qui est entré dans le champs
    //On créé une fonction déclenchée lors du submit du formulaire
    const handleAddTodo=(e)=>{
        e.preventDefault();
        addTodo(todo);//On ajoute le todo à App en appelelant la méthode addTodo
        setTodo('');//On efface le contenu du champ
    };
    return (
        <form onSubmit={handleAddTodo}>{/*On capte l'évènement submit*/}
              <input 
              type="text" 
              placeholder="Ajouter une tâche"
              value={todo}
              onChange={(e)=>{
                setTodo(e.target.value);
              }}
              />
              <button>Ajouter</button>
          </form>
    )
}
export default Form;