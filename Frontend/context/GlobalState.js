import React, { useReducer } from 'react'
import globalContext from './GlobalContextlContext'
import globalReducer from './GlobalReducer'
import axios from 'axios'

const GlobalState = props => {
  const initialState = {
    customers: null,
    transactions: null,
    loading: false,
  }
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const getCustomers = async () => {
    loading(true)
    const customers = await axios.get('./api/customers')
    dispatch({
      type: 'SET_CUSTOMERS',
      payload: customers.data,
    })
  }
}
