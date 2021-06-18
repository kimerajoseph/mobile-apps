import React, { useState } from "react";
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, ImageBackground, TouchableHighlight,
  TextInput, TouchableOpacity} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignUpScreen1 = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [text, setText] = useState('');

  const countUp = () => {
console.warn(text)
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  // function submit(text, textInput){
  //   console.warn(textInput1)
  //   console.log(textInput2)
  // }

  function Form() {
    const [state, setState] = React.useState({
      firstName: "",
      lastName: ""
    })

  class SignUpScreen extends React.Component{
    constructor(props){
      super(props);
      this.state = this.state.bind(this);
      this.state = {
        name:'',
        nameError:'',
        emailError:'',
        email:'',
        password:'',
      }
      
  
  }
 
    submit(){
      console.warn(this.state)
      let rjx = /^[a-zA-z]+$/;
      let isValid = rjx.test(this.state.name)
      if (!isValid){alert('Name Should only have alphabets')
      }
      let passrjx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      let passValid = passrjx.test(this.state.password)
      if(!passValid){alert("Password must be atleast 8 characters long, have at least 1 capital letter, one special character and one number")}
    
   }
    
  }
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.formTextStyle}>Surname</Text>
        <TextInput placeholder = "Enter Name" style = {styles.textInputStyle}
      //onChangeText = {(text) => {countUp}}
        />
        <Text style = {styles.formTextStyle}>First Name</Text>
         <TextInput placeholder = "Enter Email"  style = {styles.textInputStyle}
        onChangeText = {(text)=> {this.setState({email:text})}}
        />
         <TextInput placeholder = "Enter Password" style = {styles.textInputStyle} 
        //onChangeText = {(text)=> {SignUpScreen.setState({passwor:text})}}  maxLength = {15}
        secureTextEntry = {true}
        // keyboardType = "numeric"
       
        />
        <TextInput style = {styles.textInputStyle}  placeholder="Type here to translate!"  
        //onChangeText={text => setText(text)}  
        defaultValue={""}  onChangeText = {(text) => {submit(text, 'textInput1'); }} />
       
        

      <Button title="Show Date Picker" onPress={showDatePicker} />
      {/* <TouchableOpacity onPress={showDatePicker}>
      <TextInput style={styles.textInputStyle} placeholder = "Select D.O.B" editable = {false} >Login</TextInput>
      </TouchableOpacity> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
      <Button title = "submit" onPress = {() =>{submit()}}/>
           {/* disabled={!Boolean(this.state.name && this.state.email && this.state.password)} */}
           <input name = 'firstname'  value={state.lastName}
          onChange={handleChange}/>
           <input name = 'lasttname'  value={state.lastName}
          onChange={handleChange}/>
    </SafeAreaView>
  );
}
}
export default SignUpScreen1;
const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: 'skyblue',alignItems: 'center',justifyContent: 'center',},
  textInputStyle:{borderColor:'black', borderWidth:2, textAlign:'center',width:'80%', fontSize:25,height:40},
  formTextStyle:{fontSize:25,fontWeight:'bold',marginLeft:0,width:'80%',marginTop:15,marginBottom:5},
  })