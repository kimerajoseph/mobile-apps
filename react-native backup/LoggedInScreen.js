import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, ImageBackground, TouchableHighlight,
    TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';



function LoggedInScreen({props, navigation}) {
    return (
       
        <SafeAreaView style = {styles.container}> 
         <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {{width:'100%',height:30, backgroundColor:'#778899',flexDirection:'row'}}></View>
        <View style = {styles.menuBar}>
            <Text style = {styles.menuBarText}>Home</Text>
            <Text style = {styles.menuBarText}>Services</Text>
            <Text style = {styles.menuBarText}>Profile</Text>
        </View>
        
        <View style = {styles.div1}>
            <Text style = {{fontSize:40, fontFamily:'sans-serif-thin',color:'black',fontWeight:'bold'}}>Products</Text>
        {/* <View style = {{display:'block'}}>
  <Icon.Button name="facebook" backgroundColor="#3b5998"></Icon.Button> 
  <Icon.Button name="twitter" backgroundColor="blue"></Icon.Button> 
  <Icon.Button name="instagram" backgroundColor="red"></Icon.Button>
        </View> */}
        <View style = {{flexDirection:'column',padding:10,}}>
            <View style = {{flexDirection:'row',padding:10,width:'100%'}}>
            <TouchableOpacity style={styles.productsStyle} onPress={() => navigation.navigate('Home')}>
            <Image source={require("./images/loan2.png")} style={styles.viewBackImage}/>        
            <Text style = {styles.productsTextStyle} >Loans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsStyle} onPress={() => navigation.navigate('Home')}>
            <Image source={require("./images/savings.png")} style={styles.viewBackImage}/>  
            <Text style = {styles.productsTextStyle}>Savings</Text>
            </TouchableOpacity>
            </View>
            <View style = {{flexDirection:'row',padding:10, width:'100%'}}>
            <TouchableOpacity style={styles.productsStyle} onPress={() => navigation.navigate('Home')}>
            <Image source={require("./images/grpsavings.png")} style={styles.viewBackImage}/> 
            <Text style = {styles.productsTextStyle2} >Group Savings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsStyle} onPress={() => navigation.navigate('Home')}>
            <Image source={require("./images/invclub.png")} style={styles.viewBackImage}/> 
            <Text style = {styles.productsTextStyle2}>Investment Clubs</Text>
            </TouchableOpacity>
            </View>
            </View>       
        </View>

        {/* END OF PRODUCTS VIEW */}

       {/* START OF SERVICES VIEW */}
       <View style = {styles.div2}>
       <Text style = {{fontSize:40, fontFamily:'sans-serif-thin',color:'black',fontWeight:'bold'}}>Services</Text>
       <View style = {{flexDirection:'column'}}>
       <View style = {{ width:'100%',flexDirection:'row',height:150}}>
            <TouchableOpacity style={styles.productsStyle1} onPress={() => navigation.navigate('Home')}>
                <View style = {styles.imageViewStyle}>
            <Image source={require("./images/top1.png")} style={styles.viewBackImage1}/> 
                </View>
            <Text style = {styles.productsTextStyle3}> Airtime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsStyle1} onPress={() => navigation.navigate('Home')}>
                <View style = {styles.imageViewStyle}>
            <Image source={require("./images/mbs.png")} style={styles.viewBackImage1}/> 
                </View>
            <Text style = {styles.productsTextStyle3}> Buy MBs </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsStyle1} onPress={() => navigation.navigate('Home')}>
                <View style = {styles.imageViewStyle}>
            <Image source={require("./images/billicon.png")} style={styles.viewBackImage1}/> 
                </View>
            <Text style = {styles.productsTextStyle3}> Utilities </Text>
            </TouchableOpacity>
       </View>
       <View style = {{ width:'100%',flexDirection:'row', height:150}}>
            <TouchableOpacity style={styles.productsStyle1} onPress={() => navigation.navigate('Home')}>
                <View style = {styles.imageViewStyle}>
            <Image source={require("./images/paytv.png")} style={styles.viewBackImage1}/> 
                </View>
            <Text style = {styles.productsTextStyle3}> Pay TV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsStyle1} onPress={() => navigation.navigate('Home')}>
                <View style = {styles.imageViewStyle}>
            <Image source={require("./images/isp1.png")} style={styles.viewBackImage1}/> 
                </View>
            <Text style = {styles.productsTextStyle3}> Pay ISP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsStyle1} onPress={() => navigation.navigate('Home')}>
                <View style = {styles.imageViewStyle}>
            <Image source={require("./images/taxes.png")} style={styles.viewBackImage1}/> 
                </View>
            <Text style = {styles.productsTextStyle3}> Fines & Taxes</Text>
            </TouchableOpacity>
       </View>
       </View>
       </View>

       {/* END OF SERVICES VIEW  */}
             <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
             {/* </ImageBackground> */}
            
             </ScrollView>
         </SafeAreaView>
        
    );
}

export default LoggedInScreen;


const styles = StyleSheet.create({
    container: {flex: 1,backgroundColor: '#f4511e',alignItems: 'center',justifyContent: 'center',},
    backImage1:{width:'100%',height:'100%', resizeMode: "center",justifyContent: "center" },
    div1:{backgroundColor:'#f0f8ff', width:'98%',borderRadius:10,alignItems: 'center',justifyContent: 'center',marginBottom:20,
marginTop:50,},  
    productsStyle:{ width:'45%', minHeight:100,alignItems: 'center',justifyContent: 'center',margin:5,
borderRadius:20,borderWidth:3,borderColor:'green'},
productsTextStyle:{fontSize:25,color:'black'},
productsTextStyle2:{fontSize:20,color:'black',textAlign:'center'},
viewBackImage:{flex:0.8,},


// SECOND DIV STYLES 
div2:{backgroundColor:'#f0f8ff', width:'98%',borderRadius:10,alignItems: 'center',justifyContent: 'center',marginBottom:30,
},
productsStyle1:{flexDirection:'column', width:'25%',alignItems: 'center',justifyContent: 'center',margin:5,},
viewBackImage1:{flex:0.6},
imageViewStyle:{alignItems: 'center',justifyContent: 'center',margin:5,
borderRadius:20,borderWidth:2,borderColor:'green',paddingRight:5},
productsTextStyle3:{fontSize:20,color:'black',textAlign:'center'},

//TOP MOST MENU BAR
menuBarText:{fontSize:25, color:'black',margin:7,},
menuBar:{backgroundColor:'#b0e0e6',flexDirection:'row',height:50,alignItems: 'center',justifyContent: 'center'}
})

