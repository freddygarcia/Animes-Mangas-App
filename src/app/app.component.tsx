import React from 'react';
import * as eva from '@eva-design/eva';
import { AppNavigator } from '../navigation/app.navigation';
import { ApplicationProvider } from '@ui-kitten/components';
import { ApolloProvider } from '@apollo/client'
import { client } from '../api/client';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator />
            </ApplicationProvider>
        </ApolloProvider>
    );
};

export default App;