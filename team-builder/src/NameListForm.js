import React,{Component} from "react";

class NameListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "",last: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label htmlFor="name">Name: </label>
                <input
                id = "name"
                name = "name"
                value= {this.state.name}
                onChange={this.handleChange}
                />
                <label htmlFor="last">Last: </label>
                <input
                    id = "last"
                    name = "last"
                    value= {this.state.last}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>


        );
    }
}
export  default  NameListForm;