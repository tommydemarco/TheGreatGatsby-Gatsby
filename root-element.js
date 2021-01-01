import React from "react"
import { Provider } from "react-redux"
import store from "./src/redux/store"

import { GatsbyContext } from "./src/context/context"

import TheHeader from "./src/components/TheHeader"

import "./static/global.scss"

export const rootElement = ({ element, authUtils }) => {
  return (
    <Provider store={store}>
      <GatsbyContext>
        <TheHeader />
        {element}
      </GatsbyContext>
    </Provider>
  )
}
