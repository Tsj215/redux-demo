import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from '../redux/actions'
import Counter from "../component/counter";

export default connect(
    state => ({count: state}),//mapStateToProps
    {increment, decrement, incrementAsync},//mapDispatchToProps
)(Counter)