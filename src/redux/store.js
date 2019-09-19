import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter} from "./redurces";

//生成store对象
const store = createStore(
    counter,
    applyMiddleware(thunk)//应用上异步中间件
)
console.log(store)

export default store