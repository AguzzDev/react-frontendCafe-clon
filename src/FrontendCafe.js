import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppRouter } from './router/AppRouter'

import "./styles/scrollbar.css"

export const FrontendCafe = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
