import { Component } from 'react'
import { List } from 'semantic-ui-react'

export default class extends Component {
    
    removeItem = (id) => {
        this.props.removeTodo(id)
    }
    
    render () {
        if(this.props.todoArray.length === 0) {
            return <h3>You currently have no todos!</h3>
        }

        else {
            return (
                <List divided animated>
                    {
                        this.props.todoArray.map((item, index) => {
                            return (
                                <List.Item key={index}>
                                <List.Icon 
                                    name='close' 
                                    size='large' 
                                    verticalAlign='middle' 
                                    onClick={() => this.removeItem(item.itemId)} link
                                />
                                    <List.Content>
                                        <List.Header>{item.itemName}</List.Header>
                                        <List.Description>{item.itemDescription}</List.Description>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    }
                </List>
            )
        }
    }
}