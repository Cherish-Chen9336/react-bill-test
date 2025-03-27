// 账单列表相关 store

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
  // 数据状态 state
  name: 'bill',
  initialState: {
    billList: [],
  },
  reducers: {
    // 同步修改方法
    setBillList(state, action) {
      state.billList = action.payload
    },
    // 同步添加账单方法
    addBill(state, action) {
      state.billList.push(action.payload)
    },
  },
})

// 解构actionCreater 函数
const { setBillList, addBill } = billStore.actions

// 编写异步函数
const getBillList = () => {
  return async (dispatch) => {
    // 编写异步请求
    const res = await axios.get('http://localhost:8888/ka')
    // 触发同步reducer
    dispatch(setBillList(res.data))
  }
}

// 编写异步
const addBillList = (data) => {
  return async (dispatch) => {
    // 编写异步请求
    const res = await axios.post('http://localhost:8888/ka', data)
    // 触发同步reducer
    dispatch(addBill(res.data))
  }
}

export { getBillList, addBillList }

// 导出reducer
const reducer = billStore.reducer

export default reducer
