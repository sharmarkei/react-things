import React from 'react'
export default props => (
    <>
        <h1>List of things</h1>
        <ul>
            {props.things.map(thing => <ThingItem thing={thing} onDelete={props.onDelete} />)}
        </ul>
        <ThingForm onCreated={props.onCreated} />
    </>
)

function ThingItem(props) {
    return (
        <>
            <li>
                <p>{props.thing.name}</p>
                <button onClick={() => props.onDelete(props.thing)}>Delete</button>
            </li>
        </>
    )
}

class ThingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formThing: '',
        }

        this.createThing = this.createThing.bind(this)
        this.changeHandler = this.changeHandler.bind(this)

    }

    createThing(e) {
        e.preventDefault()
        this.props.onCreated({ name: this.state.formThing })

    }

    changeHandler(e) {
        this.setState({
            formThing: e.target.value
        })
    }

    deleteHandler(thingToDelete) {
        const newThings = this.state.things.filter(thing => thing.id !== thingToDelete.id);

        this.setState({
            things: newThings
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.createThing}>
                    <fieldset>
                        <legend>Enter Things</legend>
                        <input
                            type="text"
                            onChange={this.changeHandler}
                            value={this.state.formThing}
                        />
                        <button>OKAY</button>
                    </fieldset>
                </form>
            </>
        )
    }
}