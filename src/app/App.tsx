import React from 'react';
import * as eva from '@eva-design/eva';
import { AppNavigator } from '../navigation/app.navigation';
import { ApplicationProvider } from '@ui-kitten/components';
import { ApolloProvider } from '@apollo/client'
import { client } from '../api/client';
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <ReduxProvider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppNavigator />
                    </PersistGate>
                </ReduxProvider>
            </ApplicationProvider>
        </ApolloProvider>
    );
};

export default App;