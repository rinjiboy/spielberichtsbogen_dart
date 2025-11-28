import {React, Component} from 'react';
import TableRow from './tableRow.component';
import TableHeadItem from './tableHeadItem.component';

class Table extends Component{

render(){


const { theadData, tbodyData, customClass } =this.props;

    return(
        <table className={customClass}>
            <thead>
                <tr>
                    {
                    theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {
                tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};
};

export default Table;