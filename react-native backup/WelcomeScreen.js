import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, ImageBackground, TouchableHighlight,
     TextInput, TouchableOpacity } from 'react-native';
     import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
     import Icon from 'react-native-vector-icons/FontAwesome';


function WelcomeScreen({props, navigation}) {
    const handlePress = () => { 
     navigation.navigate('LoggedIn')
   }
   const handlePress1 = () => { 
    navigation.navigate('SignUp')
  }
  const handlePress2 = () => { 
    navigation.navigate('form1')
  }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("./images/saccoLogo.jpg")} style={styles.backImage1}>
            <View style = {styles.headerOne}>
            <Text style={styles.text}>Welcome To UETCL SACCO</Text>
            </View>            
      <View style = {styles.signInForm}>
      <Text style = {styles.labelStyle}>Username</Text>
      <TextInput style={styles.inputStyle} onChangeText = {handlePress} ></TextInput>
      <Text style = {styles.labelStyle}>Password</Text>
      <TextInput style={styles.inputStyle} ></TextInput>
      <TouchableOpacity onPress={(handlePress)} style = {{width:'80%', marginLeft:'25%'}}>
      <TextInput style={styles.buttonStyle}  editable = {false} >Login</TextInput>
      </TouchableOpacity>
      <Icon.Button name="google" backgroundColor="grey" disabled = {true}>
      <Text style={{ fontSize: 20,color:'white' }}>
      Sign In with Google
    </Text>
        </Icon.Button>
      <Text onPress={(handlePress2)} style = {styles.SignUpText}>New Member? Sign Up Here</Text>
      {/* <Text onPress={(handlePress2)} style = {styles.SignUpText}>Go to Form</Text> */}
{/* 
      <TouchableOpacity onPress={(handlePress1)} style = {{width:'80%', marginLeft:'25%'}}>
      <TextInput style={styles.buttonStyle}  editable = {false} >SignUp</TextInput>
      </TouchableOpacity> */}
      </View>
      </ImageBackground>
        </SafeAreaView>
    );
    }
const styles = StyleSheet.create({
    container: {flex: 1,backgroundColor: '#CAE9F2',alignItems: 'center',justifyContent: 'center',},

      containerTwo:{flex: 1,backgroundColor: '#2BC7F3',alignItems: 'center', justifyContent: 'center',},

      backImage1:{width:'100%',height:'100%', resizeMode: "center",justifyContent: "center" },
 
      text:{alignSelf:'center',alignItems: 'center',justifyContent: 'center',color:'white',fontSize:50,fontFamily:'Roboto',
      width:'90%',marginLeft :'5%',},

      SignUpText:{ fontWeight: 'bold', fontStyle: 'italic',textDecorationLine: 'underline', color:'blue', fontSize:20,marginBottom:20,
    marginTop:20},


      buttonStyle:{color: 'white', textAlign:'center', alignItems: 'center',justifyContent: 'center',marginTop:50,marginBottom:20,
      backgroundColor:'orange',width:'70%', height:40,fontSize:30},

      signInForm:{backgroundColor:'#E2F3F5',width:'95%',borderRadius:10,alignItems: 'center',justifyContent: 'center',padding:10,
      marginTop:30, marginLeft:'2%',},
    
      inputStyle:{ borderWidth:1,height:40,width:'90%',marginTop:5,fontSize:30, },

      labelStyle:{color:'black',fontSize:30,fontFamily:'Roboto',width:'90%',marginLeft:0,marginTop:10,},
      
      headerOne:{backgroundColor:'orange',alignSelf:'center',alignItems: 'center',justifyContent: 'center', width:'100%',},
   
})
export default WelcomeScreen;