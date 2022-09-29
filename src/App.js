import { useState, useReducer } from 'react';
import './App.css';

const ACTIONS = {
    ADD_TODO: 'add-todo'
}

function reducer(state, action) {
    
}

function App() {
    // Declare new state counter var
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO })
        setName('');
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            <button>Go</button>
            <div class="test">
                {name}
            </div>
        </div>
    );
}

export default App;
