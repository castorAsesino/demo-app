import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,Image
} from 'react-native';import { useNavigation } from '@react-navigation/native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import { TextInput } from 'react-native-paper';
export default function Login({navigation}) {


 const [text, setText] = React.useState("");

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      	
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>

          <Image source={require('../../assets/images/login2.gif')} style={{ margin: 20 ,width:400, height:400, transform: [{rotate: '-0deg'}]}}  />
        </View> 

      <Text style={{ color: "#1771F5", fontSize: 15, fontWeight: "bold" }}>
				WIKI
			</Text>
      <Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 5,
					marginBottom: 40,
				}}
			>
			EMPRESAS
			</Text>
      <InputField
          label={'Usuario'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          /* fieldButtonLabel={"Forgot?"} */
          fieldButtonFunction={() => {}}
        />
		
			<TouchableOpacity
				onPress={() => navigation.navigate("Home")}
				style={{
					backgroundColor: "#1771F5",
					borderRadius: 18,
					paddingVertical: 18,
					width: "100%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>V1.0</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#1771F5', fontWeight: '700'}}> Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>



        

    </SafeAreaView>
   
  )
}