import reducer, { setAnswearId, clearAnswearId } from "../../src/features/answearSlice"
import { AnyAction } from '@reduxjs/toolkit'

import { answearDefault_mockData } from '../mockData/answearSlice_mockData'
import { IAnswear } from "../../src/features/interface/IAnswearSlice"


const testData = answearDefault_mockData

describe("answear slice should pass the test", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(
    {
      ...testData
    })
  })

  it('answear id should update to 1', () => {
    const previousState: IAnswear = {
      ...testData
    }

    expect(reducer(previousState, setAnswearId({ id: "1" }))).toEqual({
      ...testData,
      id: "1"
    })
  })

  it('answear id should be empty when clear', () => {
    const previousState: IAnswear = {
      ...testData
    }

    expect(reducer(previousState, setAnswearId({ id: "1" }))).toEqual({
      ...testData,
      id: "1"
    })

    expect(reducer(previousState, clearAnswearId({}))).toEqual({
      ...testData,
      id: ""
    })
  })
})
