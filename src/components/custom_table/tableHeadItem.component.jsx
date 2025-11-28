import { React, Component }from 'react';

class TableHeadItem extends Component{
render (){


const { item } = this.props;
    return (
        <td title={item}>
            {item}
        </td>
    );
};
}

export default TableHeadItem;