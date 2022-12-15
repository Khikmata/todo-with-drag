import React from 'react'
import { Droppable, } from 'react-beautiful-dnd';
import { Todo } from './model'

import TodoItem from './todoItem';


interface TodoProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos, }: TodoProps) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
                        {...provided.droppableProps}
                    >
                        <span className="content__title">Active tasks</span>
                        {todos?.map((todo, index) => (
                            <TodoItem
                                index={index}
                                todo={todo} todos={todos}
                                key={todo.id}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )
                }
            </Droppable >

            <Droppable droppableId='TodosRemove'>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className={`todos remove ${snapshot.isDraggingOver ? 'dragremove' : ''}`}
                        {...provided.droppableProps}
                    >
                        <span className="content__title"> Completed tasks</span>
                        {completedTodos?.map((todo, index) => (
                            <TodoItem
                                index={index}
                                todo={todo}
                                todos={completedTodos}
                                key={todo.id}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable >
        </div >
    );
};
export default TodoList;