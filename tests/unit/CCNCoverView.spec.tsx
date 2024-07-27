import React from 'react'
import { render } from "@testing-library/react"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { store } from '../../src/app/store'
import { Provider } from 'react-redux'

import CCNCoverView from "../../src/views/CCNCoverView"


describe("CCNCoverView.tsx", () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })

  it("Render Properly", async () => {
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <CCNCoverView />
        </Provider>
      </Router>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it('Routing between Pages', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <CCNCoverView />
        </Provider>
      </Router>
    )
    expect(history.location.pathname).toBe('/')

    const btnCheckout: HTMLElement  = container.querySelector('.btnStartCover') as HTMLElement
    btnCheckout.click()
    expect(history.location.pathname).toBe('/question')
  })
})
