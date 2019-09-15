import React from 'react';
import AppContainer from './src/componentScreen/Navigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducer/rootReducer';
const store = createStore(rootReducer);
const App = () => {
    return (
        <Provider store={store}>
            <AppContainer></AppContainer>
        </Provider>
    );
};

export default App;
