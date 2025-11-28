import { Component } from 'react';
// import Table from '../custom_table/custom_table.component';

import './players-list.scss';

class PlayerList extends Component {
    constructor(){
        super();
        this.state = {subRd: 'ab Rd', subPl: '0'};
        this.handleChangeRd = this.handleChangeRd.bind(this);
        this.handleChangePl = this.handleChangePl.bind(this);
    }

    handleChangeRd(e) {
        this.setState({ subRd: e.target.value});
    }
    handleChangePl(e) {
        this.setState({ subPl: e.target.value});
    }
    render(){
        const { players, className, table } = this.props;
        const theadData = ['','Name', 'ab Runde','für' ,'Pass-Nr.' ];

        return(
            <div className={ className }>
                {
                // <Table theadData={theadData} tbodyData={players}/>
                 <table>
                    <thead>
                        <tr>
                        {
                            theadData.map((data) => (
                                
                                    <td>{data}</td>
                            
                            ))
                        }
                    </tr>
                    </thead>
                    {
                    players.map((player, index) => (
                    <tr key={player.id}>
                        <td>{table}{player.id}</td>
                        <td>{player.name}</td>
                        { index < 4 ? <td></td> : 
                        <td>
                            <select value='bla' onChange={this.handleChangeRd} placeholder='bla'>
                                <option name="1"> 1 </option>
                                <option name="2"> 2 </option>
                                <option name="3"> 3 </option>
                                <option name="4"> 4 </option>
                            </select>
                        </td>
                        }
                        { index < 4 ? <td></td> : 
                        <td>
                            <select value='bla' onChange={this.handleChangeRd} placeholder="bla">
                                <option name='1'> {table}1 </option>
                                <option name="2"> {table}2 </option>
                                <option name="3"> {table}3 </option>
                                <option name="4"> {table}4 </option>
                            </select>
                        </td>
                        }
                        <td>{player.name}</td>
                    </tr>
                    ))
    }
                </table> }
            </div>
        )
    }
}

export default PlayerList;