import React, {Component} from 'react';
import {View, Text, Button, Image,TextInput} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';
import Profile from '../profile/profile';
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      image:null,
      named:''
    }
  }


  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeBase64: true,
      useFrontCamera: true,
      cropping: true,
    }).then(image => {
      this._onResponse(image)
    });
  };
  choosePhotoGallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
    }).then(image => {
      this._onResponse(image)
    });
  };

  _onResponse=(image)=>{
      console.log("imagepathhh"+JSON.stringify(image));
      console.log("imagepathhh"+image.path);

     this.setState({image: image.path});
    //  this.props.actions.imagechange(image.path)

  }
render(){
  const { image,named,}= this.state;
  return (
    <View style={{flex: 1, marginHorizontal: 20, backgroundColor: '|#ffffff'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 120, height: 120, borderRadius: 60, margin: 30}}
          source={{
            uri:
              image != null
                ? image
                : 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>{this.props.names}</Text>
       

        <Text>{this.state.named}</Text>
        <Text>{this.props.value1}</Text>
         <Button
          onPress={() => this.props.changeValue1(786)}
          title="PRESS"
        />
        <TextInput
          placeholder="Search Name"
          style={{
            backgroundColor: 'red',
            height: 40,
            width: '80%',
            padding: 10,
            borderRadius: 15,
          }}
          onChangeText={e => this.setState({named: e})}
        />
        <Button
          title="update Names"
          onPress={() => {
            console.log(JSON.stringify(this.props.action));
            this.props.userDataUpdate({
              named: named,
              image: image,
            });
          }}
        />
      </View>

      <View>
        <Button
          title="Choose Camera"
          onPress={() => this.takePhotoFromCamera()}
          style={{marginTop: 2}}
        />
        <Button
          title="Choose Gallary"
          onPress={() => this.choosePhotoGallary()}
        />
        <Button
          title="Login Screen"
          onPress={() => this.props.navigation.navigate('Login')}
          
        />
      </View>
    </View>
  );
}
}
export default Home;
