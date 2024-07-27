import React from 'react'
import { render } from "@testing-library/react"
import { configureStore } from '@reduxjs/toolkit'
import { store } from '../../src/app/store'
import { Provider } from 'react-redux'

import CCNActionButton from "../../src/components/button/CCNActionButton"
import * as hooks from '../../src/app/hooks'


describe("CCNActionButton.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <CCNActionButton
          a_strText='Hello'
        />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it('Should Render Properly passed argument', () => {
    const { container } = render(
      <Provider store={store}>
        <CCNActionButton
          a_strText='Hello'
        />
      </Provider>
    )

    const txtHelmName: HTMLElement  = container.querySelector('.btnActionText') as HTMLElement
    expect(txtHelmName.innerHTML).toBe("Hello")
  })
})
