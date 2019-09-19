import React, {Component} from "react";
import PropTypes from 'prop-types'

export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired
    }

    increment = () => {
        const num = this.select.value * 1
        //调用store的方法发更新状态
        this.props.increment(num)
    }
    decrement = () => {
        const num = this.select.value * 1
        //调用store的方法
        this.props.decrement(num)
    }
    incrementAsync = () => {
        const num = this.select.value * 1
        this.props.incrementAsync(num)

    }

    render() {
        const {count} = this.props
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