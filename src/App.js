import { useState, useReducer } from 'react';
import './App.css';

const ACTIONS = {
    ADD_TODO: 'add-todo'
}

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

function App() {
    // Declare new state counter var
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
        setName('')
    }

    console.log(todos);

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            <button>Go</button>
            
            <div className="test">
                {name}
            </div>
        </div>
    );
}

export default App;
