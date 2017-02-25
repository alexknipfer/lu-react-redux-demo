import { Button, Form } from 'semantic-ui-react'

import { Component } from 'react'

export default class extends Component {

    addTodo = (e) => {
        e.preventDefault()

        const itemName = document.getElementById('itemToAdd').value
        const itemDescription = document.getElementById('itemDescription').value

        this.props.addTodo(itemName, itemDescription)
    }

    render () {
        return (
            <Form onSubmit={this.addTodo}>
                <Form.Field>
                    <input type='text' placeholder='Add item' id='itemToAdd' name='itemToAdd' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Item Description' id='itemDescription' name='itemDescripton' />
                </Form.Field>
                <Button type='submit'>Add Item</Button>
            </Form>
        )
    }
}