import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const login = () => {
    const {type} = useLocalSearchParams<{type:string}>()
    console.log('Page type',type)
  return (
   <KeyboardAvoidingView behavior={Platform.OS == 'ios'? 'padding': 'height'}>
    {type=='login'? <Text>Welcome Back</Text>:<Text> Create New Account</Text> }
    
   </KeyboardAvoidingView>
  )
}

export default login

const styles = StyleSheet.create({})