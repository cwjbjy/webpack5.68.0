import React, {Component} from 'react';

let name = 'Alan';

export default class Hello extends Component{
    render() {
        return (
            <div>
                {name}
            </div>
        );
    }
}