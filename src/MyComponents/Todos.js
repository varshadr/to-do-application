import React,{ Component} from 'react';//imports the React module as well as the Component class from the 'react' package. 
import TodoItem from './TodoItem';//This component will be used within the Todos component to render individual todo items.
class Todos extends Component{//This defines a class component named Todos that extends the Component class provided by React.
    render() { //This is the render method. It's a required method in a class component. It defines what should be rendered to the DOM when this component is used.
        const{ todos, markComplete, deleteTodo}= this.props;//This line uses object destructuring to extract the todos, markComplete, and deleteTodo props from this.props. These props were passed down from the parent component (likely App) when Todos was used.
        return(
            <div className = "todo-list">
            {todos.map(todo => (//it uses .map to iterate over the todos array. For each todo in the array, it renders a TodoItem component.
                <TodoItem//Each TodoItem component is passed four props: key, todo, markComplete, and deleteTodo. These props are used to customize the behavior and appearance of each todo item.
                key={todo.id}
                todo={todo}
                markComplete={markComplete}
                deleteTodo={deleteTodo}
                />
            ))}
            </div>
        );
}
}
export default Todos;



