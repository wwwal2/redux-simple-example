import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actionOne, actionTwo } from './redux/Actions';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                redux
                <br/>
                <button onClick={ () => this.props.dispatchDataOne('fluff') } >Action one</button>
                <button onClick={ () => this.props.dispatchDataTwo('squeak') } >Action two</button>
                <div>
                    data from redux 
                    <br/>
                    {console.log(this.props.readFromStoreOne)}
                    {this.props.readFromStoreOne}
                    <br/>
                    {console.log(this.props.readFromStoreTwo)}
                    {this.props.readFromStoreTwo}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        readFromStoreOne: state.doSomethingOne,
        readFromStoreTwo: state.doSomethingTwo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDataOne: (a) => dispatch(actionOne(a)),
        dispatchDataTwo: (b) => dispatch(actionTwo(b)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
