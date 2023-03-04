function TodoList(props) {
  const {todo} = props;
    return (
      <>
        <ul>
            {todo.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
            })}
        </ul>
      </>
    )
  }
  
  export default TodoList