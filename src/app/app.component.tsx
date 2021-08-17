import React from 'react';
import * as eva from '@eva-design/eva';
import { AppNavigator } from '../navigation/app.navigation';
import { ApplicationProvider } from '@ui-kitten/components';

const App = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
        </ApplicationProvider>
    );
};

export default App;