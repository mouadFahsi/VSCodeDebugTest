import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { IReducerState } from "../../../reducers";
import ApiService from "../../../services";
import { loadData, loadObjectViewData } from "../../../actions";
import { NavigationScreenProps } from "react-navigation";

interface FirstScreenProps extends NavigationScreenProps<{}> {
  ALL_DATA: any[];
  dispatch: any;
}

class FirstScreen extends React.Component<FirstScreenProps, any> {
  private ObjectsKeyExtractor = (obj: any) => obj.id;
  private service = new ApiService();

  componentDidMount() {
    this.loadData();
  }

  private async loadData() {
    const { dispatch } = this.props;
    const response = await this.service.getAllData();
    if (response.status === 200) {
      dispatch(loadData(response.data));
    }
  }

  private navigateToObjectView = async (obj: any) => {
    const { navigation, dispatch } = this.props;
    const response = await this.service.getAlbum(obj.id);
    if (response.status === 200) {
      dispatch(loadObjectViewData(response.data));
      navigation.navigate("ObjectView");
    }
  };

  render() {
    return (
      <View>
        {this.props.ALL_DATA ? (
          <FlatList
            keyExtractor={this.ObjectsKeyExtractor}
            data={this.props.ALL_DATA}
            renderItem={obj => (
              <TouchableOpacity
                onPress={() => this.navigateToObjectView(obj.item)}
              >
                <Text>{obj.item.title}</Text>
              </TouchableOpacity>
            )}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state: IReducerState) => {
  const ALL_DATA = state.applicationReducer.DATA || [];
  return { ALL_DATA };
};

export default connect(mapStateToProps)(FirstScreen);
