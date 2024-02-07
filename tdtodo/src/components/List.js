const List = ({todos})=>{ 
    return (
        <ul>
            {todos.map((todo)=>(//En JSX, on peut réaliser des boucles
              <li>
                  <i 
                  className={
                    "far fa-2x "+(todo.done?'fa-check-square':'fa-square')
                  }
                  ></i>            
                  <span>{todo.description}</span>
                  <button>
                    <i className="fas fa-trash fa-2x"></i>
                  </button>
              </li>
            ))}  
        </ul>
    );
};
export default List;