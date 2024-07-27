import React from 'react'
import { render } from "@testing-library/react"
import { configureStore } from '@reduxjs/toolkit'
import { store } from '../../src/app/store'
import { Provider } from 'react-redux'

import CCNResultView from "../../src/views/CCNResultView"
import * as hooks from '../../src/app/hooks'


describe("CCNResultView.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <CCNResultView />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it('Result should show Newway Helm', () => {
    const useDispatchSpy = jest.spyOn(hooks, 'useAppDispatch')
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)

    const { container } = render(
      <Provider store={store}>
        <CCNResultView />
      </Provider>
    )

    const txtHelmName: HTMLElement  = container.querySelector('.txtResultHelm') as HTMLElement
    expect(txtHelmName.innerHTML).toBe("Newway")
  })
})
