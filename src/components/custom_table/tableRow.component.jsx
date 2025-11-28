import { React,Component } from 'react';

class TableRow extends Component{
    render(){

const { data } = this.props;
    return (
        <tr>
            {
                data.map((item) => {
                    return <td key={item}>{item}</td>
                }) 
            }
        </tr>
    )
}
}

export default TableRow;