import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'

import { answearWithData_mockData } from './mockData/answearSlice_mockData'
import * as hooks from '../src/app/hooks'


const mockSelector = jest.spyOn(hooks, 'useAppSelector')
mockSelector.mockImplementation((callback) => callback({ answear: answearWithData_mockData }))
