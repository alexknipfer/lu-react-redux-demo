import { Card, Grid, Header } from 'semantic-ui-react'

import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

export default ({ todoArray , addTodo, removeTodo }) => (
    <div className='todo-view'>
        <Card>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2' icon='tasks' content='My Todos' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <TodoForm todoArray={todoArray} addTodo={addTodo} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <TodoList todoArray={todoArray} removeTodo={removeTodo} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card>
        <style jsx>{`
            .todo-view {
                display: flex;
                justify-content: center;
            }
        `}</style>
    </div>
)