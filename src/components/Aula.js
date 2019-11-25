import React from 'react';

class Teste extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        lamp: 'apagada',
    }
}

apagar = () => {
    this.setState({
        lamp: 'apagada',
    });
}

acender = () => {
    this.setState({
        lamp: 'acender',
    });
}

    render() {
        return (
        <div>
            <h1>{this.state.lamp}</h1>
            <button onClick={this.apagar}>apagar</button>
            <button onClick={this.acender}>acender</button>
        </div>
        )
    }
}

export default Teste;