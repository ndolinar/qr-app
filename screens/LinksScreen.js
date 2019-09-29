import React, {Component} from 'react';

import {ScrollView, StyleSheet, View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {TouchableOpacity} from 'react-native';

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScanner: false,
      collectedValue: '',
    };

    this.onSuccess = this.onSuccess.bind(this);
  }

  // react-native-camera code:
  // takePicture = async () => {
  //   if (this.camera) {
  //     const options = {quality: 0.5, base64: true};
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };

  onSuccess(e) {
    this.setState({
      collectedValue: e.data,
      showScanner: false,
    });
  }

  toggleScanner = deleteCollectedValue => {
    this.setState({
      showScanner: !this.state.showScanner,
      collectedValue: '',
    });
  };

  render() {
    const {showScanner, collectedValue} = this.state;

    let content = [];
    if (!showScanner) {
      content.push(
        <TouchableOpacity
          key="1"
          onPress={this.toggleScanner}
          style={styles.btn}>
          <Text style={styles.btnText}>Read some QR codes!</Text>
        </TouchableOpacity>,
      );

      if (collectedValue) {
        content.push(
          <View key="2" style={styles.scanResult}>
            <Text>Result of last scan:</Text>
            <Text style={styles.scanResultText}>{collectedValue}</Text>
          </View>,
        );
      }
    } else {
      content.push(
        <View key="3" style={styles.help}>
          <Text style={styles.helpText}>Place the code lorem ipsum.</Text>
        </View>,
      );
      content.push(
        <View key="4" style={styles.scannerWrap}>
          <QRCodeScanner style={styles.scanner} onRead={this.onSuccess} />
        </View>,
      );
      content.push(
        <TouchableOpacity
          key="5"
          onPress={() => this.toggleScanner('cancel')}
          style={styles.btn}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>,
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Scan</Text>
          {content}
        </View>
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  scannerWrap: {},
  scanner: {},
  btn: {
    marginTop: 15,
    paddingVertical: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2e78b7',
  },
  btnText: {color: '#2e78b7'},
  help: {margin: 15},
  helpText: {fontSize: 14, color: '#999'},
  scanResult: {flex: 1, padding: 15},
  scanResultText: {
    flex: 1,
    fontSize: 18,
  },
});
