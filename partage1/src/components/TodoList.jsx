import TodoItem from './TodoItem';

function TodoList({todoList}){

    return todoList.length ? (
        <ul>
            {todoList.map( todo => <TodoItem todo={ todo }/>)}
        </ul>
    ): <p>Aucune todo pour le moment</p>;
}

export default TodoList