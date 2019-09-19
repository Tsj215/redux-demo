import {createStore} from 'redux'
import {counter} from "./redurces";

//生成store对象
const store = createStore(counter)
console.log(store)

export default store