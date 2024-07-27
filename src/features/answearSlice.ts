import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { IAnswear } from './interface/IAnswearSlice'


const initialState: IAnswear = {
  id: ""
}

const answearSlice = createSlice({
  name: "answear",
  initialState,
  reducers: {
    setAnswearId: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id
    },
    clearAnswearId: (state, action: PayloadAction<any>) => {
      state.id = ""
    }
  }
})

export const {
  setAnswearId,
  clearAnswearId
} = answearSlice.actions

export const getAnswearId = (state: RootState) => state.answear.id

export default answearSlice.reducer
