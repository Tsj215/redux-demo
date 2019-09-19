import React from 'react'
import ReactDom from 'react-dom'
import App from './container/app'
import store from "./redux/store";
import {Provider} from 'react-redux'


//监听state的变化
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))
