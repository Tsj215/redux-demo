import React, {Component} from "react";
import {INCREMENT, DECREMENT} from '../redux/action-types'
import {increment, decrement} from '../redux/actions'

export default class App extends Component {

    state = {
        count: 0
    }

    increment = () => {
        const num = this.select.value * 1
        //调用store的方法发更新状态
        this.props.store.dispatch(increment(num))
    }
    decrement = () => {
        const num = this.select.value * 1
        //调用store的方法
        this.props.store.dispatch(decrement(num))
    }
    incrementAsync = () => {
        const num = this.select.value * 1
        setTimeout(() => {
            this.props.store.dispatch(increment(num))
        }, 1000)

    }

    render() {
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}
