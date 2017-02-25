
    //actions...
export const constants = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
}

let itemId = 0

export const actions = {
    addTodo(itemName, itemDescription) {
        return {
            type: constants.ADD_TODO,
            itemToAdd: {
                itemName: itemName,
                itemDescription: itemDescription,
                itemId: itemId++
            }
        }
    },
    removeTodo(id) {
        return {
            type: constants.REMOVE_TODO,
            id: id
        }
    }
}

    //reducer...
export const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.itemToAdd]
            }

        case constants.REMOVE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((item) => item.itemId !== action.id)]
            }

        default: 
            return state
    }
}