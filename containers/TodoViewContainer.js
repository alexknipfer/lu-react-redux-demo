import { Component } from 'react'
import TodoView from '../components/TodoView/TodoView'
import { actions } from '../redux/modules/todo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TodoViewContainer extends Component {
    render () {
        return (
            <TodoView 
                todoArray={this.props.todos}
                addTodo={this.props.addTodo} 
                removeTodo={this.props.removeTodo}
            />
        )
    }
}

const mapStateToProps = ({ todo: { todos } }) => {
    return {
        todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo: actions.addTodo,
        removeTodo: actions.removeTodo
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoViewContainer)