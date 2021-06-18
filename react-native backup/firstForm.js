import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker'
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, ImageBackground, TouchableHighlight,
  TextInput, TouchableOpacity, AppRegistry, ScrollView} from 'react-native';
import { Value } from 'react-native-reanimated';
//import Select from 'react-select';
import MultiSelect from 'react-native-multiple-select';
//import ListPopover from 'react-native-list-popover';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';
//import { json } from 'body-parser';
//import { response } from 'express';
import { withNavigation } from 'react-navigation';



  class RegisterForm extends React.Component{
    constructor(){
      super();
      this.state = {
        surName:'',
        givenName:'',
        gender:'',
        nationality:'',
        idType:'',
        idNumber:'',
        yob:'2000',
       date:'',
       weather:'Not Available',
       telNoI: '07',
       telNoII: '08',
       email:'',

      }   
    }

    checkYear(){
      var currentYear = new Date().getFullYear() 
      var maxYear = currentYear - 18
      var minYear = currentYear - 60
      let chkYear = this.state.yob
      let telI = this.state.telNoI
      let telII = this.state.telNoII

      let chkyob = /^[0-9\b]+$/;
      let yobValid = chkyob.test(chkYear)
      if(!yobValid && chkYear != ""){alert("Year Of Birth should be numbers only. Please Re-Enter YOB")
      this.setState({yob:maxYear})}

      if(!/^[0-9\b]+$/.test(telI) && telI.length >= 1){alert("Phone Numbers should be digits only")
      this.setState({telNoI:'00'})}
      if(!/^[0-9\b]+$/.test(telII) && telII.length >= 1){alert("Phone Numbers should be digits only")
      this.setState({telNoI:'00'})}
      

      if(chkYear.length >= 4 && chkYear < minYear){alert("Invalid year of birth. Please Enter a year between " + minYear + " and " + maxYear)
      this.setState({yob:maxYear})}

      else if(chkYear.length >= 4 && chkYear > maxYear)
      {alert("Invalid year of birth. Please Enter a year between " + minYear + " and " + maxYear),
      this.setState({yob:maxYear})}
    }

  
    submit = () => {
      //console.warn(this.state)
      // let rjx = /^[a-zA-z]+$/;
      // let isValid = rjx.test(this.state.surName)
      // let isValid1 = rjx.test(this.state.givenName)
      // let isValid2 = rjx.test(this.state.nationality)
      // let isValid3 = rjx.test(this.state.sex)
      // if (!isValid || !isValid1 || !isValid2 || !isValid3 ){alert('Name, Nationality and Sex Should only have alphabets')
      // }
      // let passrjx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      // let passValid = passrjx.test(this.state.password)
      // if(!passValid){alert("Password must be atleast 8 characters long, have at least 1 capital letter, one special character and one number")}
     
        fetch("http://192.168.43.7:5000/signUp",{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              surName:this.state.surName,
              givenName:this.state.givenName,
              gender:this.state.gender,
              nationality:this.state.nationality,
              idType:this.state.idType,
              idNumber:this.state.idNumber,
              yob:this.state.yob,
             date:this.state.date,
             telNoI:this.state.telNoI,
             telNoII:this.state.telNoII,
             email:this.state.email,
    
            })
        })
        .then(res=>res.json())
        this.props.navigation.navigate('Home')
        console.warn(this.state)
        //navigation.navigate("Home")
        // .then(data=>{
        //     Alert.alert(`${data.surName} is saved successfuly`)
        //     navigation.navigate("Home")
        //})
      // axios.get("http://192.168.43.7:5000/weather").then(function(response){
      //   var data = JSON.stringify(response.data);
      //   var finalData = JSON.parse(data)
      //   console.log(finalData)
      //   var fTemp = finalData['current']['temperature']
      //   console.log("THIS IS THE FINAL TEMP " + fTemp)

        
      // })
      // console.warn(this.state)

    }


    render(){
      //const screenHeight = Dimensions.get('window').height
      return (
        <ScrollView>
        <SafeAreaView style = {styles.container}>
          <Text style = {styles.mainText}>SACCO REGISTRATION FORM</Text>
        <View style = {styles.overallView}>
          <TextInput placeholder = "Surname" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({surName:text})}} 
          />
          <TextInput placeholder = "Given Names" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({givenName:text})}} 
          />
          <View style = {styles.pickerStyle}>
<Picker selectedValue = {this.state.gender}
onValueChange = {(itemValue, itemIndex) => this.setState({gender :itemValue})}
 >
   <Picker.Item label = 'Select Your Gender' value = ''/>
 <Picker.Item label = 'Male' value = 'Male'/>
 <Picker.Item label = 'Female' value = 'Female'/>
 </Picker>
</View>
           <TextInput placeholder = "Nationality" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({ nationality:text})}} 
          />
          <View style = {styles.pickerStyle}>
          <Picker
          selectedValue = {this.state.idType}
    onValueChange = {(itemValue, itemIndex) => this.setState({idType :itemValue})} 
     >
        <Picker.Item label = 'Select ID Type' value = ''/>
     <Picker.Item label = 'National ID' value = 'N ID'/>
     <Picker.Item label = 'Passport' value = 'pass'/>
     </Picker>
          </View>
          <TextInput placeholder = "ID No (NIN or Passport No)" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({idNumber:text})}} 
          />
          <TextInput placeholder = "Telephone No. I" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({telNoI:text})}}  maxLength = {20}
          onChange = {this.checkYear(this.state.yob)} 
          />
          <TextInput placeholder = "Telephone No. II" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({telNoII:text})}}  maxLength = {20}
          onChange = {this.checkYear(this.state.yob)} 
          />
          <TextInput placeholder = "Email Address" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({email:text})}}  
          />
           <TextInput placeholder = "Year of Birth" style = {styles.textInputStyle}
          onChangeText = {(text)=> {this.setState({yob:text}),text.replace(/[^0-9]/g, '')}}  maxLength = {5}
          keyboardType = "numeric"
          onChange = {this.checkYear(this.state.yob)} 
          />
<DatePicker
          style={{width: 200,marginBottom:30,}}  date={this.state.date}  mode="date"  placeholder="Day of Birth"         
          format="YYYY-MM-DD"  minDate={this.state.yob + '-01-01'}  maxDate={this.state.yob + '-12-31'}
          confirmBtnText="Confirm"   cancelBtnText="Cancel"
    customStyles={{ dateIcon: {  position: 'absolute', left: 0, top: 4,  marginLeft: 0},
    dateInput: {marginLeft: 36,borderWidth:0, borderBottomWidth:3, borderBottomColor:'skyblue',marginTop:20,fontSize:20 }}}        
          onDateChange={(date) => {this.setState({date: date})}}
        />      
        {/* <Text>THE WEATHER IN KAMPALA IS: {this.state.weather}</Text> */}
        <View  style={{marginTop:20}}>
          <Button title = "submit" onPress = {() =>{this.submit()}}
          //  disabled={!Boolean(this.state.surName && this.state.givenName && this.state.nationality)}
         
          />
        </View>
        
        </View>
        </SafeAreaView>
        </ScrollView>
      )
    }
    
  }
  export default withNavigation (RegisterForm);

  const styles = StyleSheet.create({
    container:{paddingTop:50, height:1000,},
    overallView: {margin:40,height:500},
    formTextStyle:{fontSize:25,fontWeight:'bold',marginLeft:0,width:'80%',marginTop:15,marginBottom:5},
    pickerStyle:{borderBottomWidth:3, borderBottomColor:'skyblue',width:'100%',textAlign:'center'},
    mainText:{fontSize:30, fontWeight:'bold', color:'blue', textDecorationLine:'underline', textAlign:'center'},
    textInputStyle:{borderWidth:0,margin:5, textAlign:'center', borderBottomWidth:3, borderBottomColor:'skyblue',marginTop:20,fontSize:20, height:40},
  })