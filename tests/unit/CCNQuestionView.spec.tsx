import React from 'react'
import { render } from "@testing-library/react"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { store } from '../../src/app/store'
import { Provider } from 'react-redux'

import CCNQuestionView from "../../src/views/CCNQuestionView"


describe("CCNQuestionView.tsx", () => {
  const history = createMemoryHistory({ initialEntries: ['/question'] })

  it("Render Properly", async () => {
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <CCNQuestionView />
        </Provider>
      </Router>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it('Routing between Pages', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <CCNQuestionView />
        </Provider>
      </Router>
    )
    expect(history.location.pathname).toBe('/question')

    const btnCheckout: HTMLElement  = container.querySelector('.btnQuestionAction2') as HTMLElement
    btnCheckout.click()
    btnCheckout.click()
    expect(history.location.pathname).toBe('/result')
  })
})
