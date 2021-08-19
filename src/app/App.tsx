import React from 'react';
import * as eva from '@eva-design/eva';
import { AppNavigator } from '../navigation/app.navigation';
import { ApplicationProvider } from '@ui-kitten/components';
import { ApolloProvider } from '@apollo/client'
import { client } from '../api/client';
import { Provider as ReduxProvider } from 'react-redux'
import store from './store';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <ReduxProvider store={store}>
                    <AppNavigator />
                </ReduxProvider>
            </ApplicationProvider>
        </ApolloProvider>
    );
};

export default App;