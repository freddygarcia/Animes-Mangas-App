import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { MockedProvider } from '@apollo/client/testing';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { render, fireEvent } from '@testing-library/react-native'
import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../src/reducers/root.reducer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux'
import { View } from 'react-native';
import { AppNavigator } from '../src/navigation/app.navigation';
jest.useFakeTimers()

const mocks = []
//     {
//         request: {
//             query: 'GET_DOG_QUERY',
//             variables: {
//                 name: 'Buck',
//             },
//         },
//         result: {
//             data: {
//                 dog: { id: '1', name: 'Buck', breed: 'bulldog' },
//             },
//         },
//     },
// ];

const store = createStore(rootReducer);

const AllTheProviders = ({ children }) => {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <MockedProvider mocks={mocks} addTypename={false}>
                <ApplicationProvider {...eva} theme={eva.light}>
                    <ReduxProvider store={store}>
                        <AppNavigator>
                            {children}
                        </AppNavigator>
                    </ReduxProvider>
                </ApplicationProvider>
            </MockedProvider>
        </>
    )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }