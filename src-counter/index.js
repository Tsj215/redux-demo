import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import store from "./redux/store";

function render() {
    ReactDom.render(<App store={store}/>, document.getElementById('root'))
};

render()
//监听state的变化
store.subscribe(render)