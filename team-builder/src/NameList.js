import React,{Component} from "react";
import NameListForm from "./NameListForm";

class  NameList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {name:"VLad",last: "Horbachenko"},
                {name: "Alex", last: "Kaban"}
            ]
        };
    this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        this.setState(state => ({
            items:[...state.items,item]
        }))
    }
    renderItems(){
        return(
            <ul>
                {this.state.items.map(item => (
                    <li>
                        {item.name} {item.last}
                    </li>
                ))}
            </ul>
        )
    }
    render() {
        return(
            <div>
                <h1>Vlad</h1>
                {this.renderItems()}
                <NameListForm addItem = {this.addItem}/>
            </div>
        )
    }
}
export default NameList