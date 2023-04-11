import React from 'react'
import 'react-native'

import { HomeScreen } from '.'
import { LoginScreen } from '~/screens/LoginScreen'
import { useStore } from '~/store'
import {
  MockedNavigator,
  fireEvent,
  render,
  renderHook,
} from '~/utils/setup_test'

describe('render home screen', () => {
  it('test logout user', () => {
    const { getByTestId: getByTestIdLoginScreen } = render(
      <MockedNavigator component={LoginScreen} />
    )

    const userEmail = getByTestIdLoginScreen('input-user-email')
    const userPassword = getByTestIdLoginScreen('input-user-password')
    const appButtonLoginScreen = getByTestIdLoginScreen('app-button')

    fireEvent.changeText(userEmail, 'test@mail.com')
    fireEvent.changeText(userPassword, '12345678')
    fireEvent.press(appButtonLoginScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedBefore },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedBefore).toBeTruthy()

    const { getByTestId: getByTestIdHomeScreen } = render(
      <MockedNavigator component={HomeScreen} />
    )

    const appButtonHomeScreen = getByTestIdHomeScreen('app-button')
    fireEvent.press(appButtonHomeScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedAfter },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedAfter).toBeFalsy()
  })
})

describe('render home screen', () => {
  it('test logout user', () => {
    const { getByTestId: getByTestIdLoginScreen } = render(
      <MockedNavigator component={LoginScreen} />
    )

    const userEmail = getByTestIdLoginScreen('input-user-email')
    const userPassword = getByTestIdLoginScreen('input-user-password')
    const appButtonLoginScreen = getByTestIdLoginScreen('app-button')

    fireEvent.changeText(userEmail, 'test@mail.com')
    fireEvent.changeText(userPassword, '12345678')
    fireEvent.press(appButtonLoginScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedBefore },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedBefore).toBeTruthy()

    const { getByTestId: getByTestIdHomeScreen } = render(
      <MockedNavigator component={HomeScreen} />
    )

    const appButtonHomeScreen = getByTestIdHomeScreen('app-button')
    fireEvent.press(appButtonHomeScreen)

    const {
      result: {
        current: { isAuthorized: isAuthorizedAfter },
      },
    } = renderHook(() => useStore())
    expect(isAuthorizedAfter).toBeFalsy()
  })
})
