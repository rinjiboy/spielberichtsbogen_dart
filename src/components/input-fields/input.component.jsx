import { Component } from 'react';

import './input-fields.scss';

class Input extends Component{
    render(){
        const {name, label} = this.props;
        return <label>
            {label}: <input label={label} type="text" value="" name={name} />
        </label>
    }
}
export default Input;