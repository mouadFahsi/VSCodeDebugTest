import React from "react";
import { View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigation from "../navigation/AppNavigation";

export default class Setup extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <AppNavigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
