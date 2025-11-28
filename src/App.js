import { Component } from 'react';
import PlayerList from './components/players_list/players_list.component';
import Input from './components/input-fields/input.component';


import logo from './Logo_Spielbericht.png';
import './App.css';

class App extends Component {
  render(){
    const playerHome = [
      {
        name: 'Shoeii',
        id: '1',
        items:['Shoeii','','','']
      },
      {
        name: 'Skully',
        id: '2',
        items:['Paul','','','']
      },
      {
        name:'Rinji',
        id: '3',
        items:['Paul','','','']
      },
      {
        name:'Kev',
        id: '4',
        items:['Paul','','','']
      },
      {
        name: 'Paul',
        id: '5',
        items:['Paul','','','']
      }
    ];
    const playerAway = [
      {
        id: '1',
        items:['Shoeii','','','']
      },
      {
        id: '2',
        items:['Paul','','','']
      },
      {
        name:'Rinji',
        id: '3',
        items:['Paul','','','']
      },
      {
        name:'Kev',
        id: '4',
        items:['Paul','','','']
      },
      {
        id: 'E1',
        items:['Paul','','','']
      },
      {
        id: 'E2',
        items:['Paul','','','']
      },
      {
        id: 'E3',
        items:['Paul','','','']
      },
      {
        id: 'E4',
        items:['Paul','','','']
      }
    ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Input label="Disziplin" name="Disziplin"></Input><br/>
        <Input label="Liganame" name="Liganame"></Input><br/>
        <Input label="Spiel-Nr" name="Spiel-Nr"></Input><br/>
        <Input label="Spielkl./NR" name="Spielkl./NR"></Input><br/>
        <PlayerList className='Home' players={playerHome} table='H'></PlayerList>
        <PlayerList className='Away' players={playerAway} table='G'></PlayerList>
      </body>
    </div>
  );
};
}

export default App;
