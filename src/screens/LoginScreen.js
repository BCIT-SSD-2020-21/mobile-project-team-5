import React, { useState, useContext } from "react"
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base"

import { AuthContext } from "../context/AuthProvider"

import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { register } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="password"
        keyboardType="numeric"
      />
      <Button title="Sign up" onPress={() => register(email, password)} />

      {/* <Content>
        <Form>
        <Item fixedLabel>
        <Label>Email</Label>
        <Input onChange={(text) => setEmail(text)} />
        </Item>
        <Item fixedLabel last>
        <Label>Password</Label>
        <Input />
        </Item>
        <Button block light>
        <Text>Sign In</Text>
        </Button>
        </Form>
      </Content> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})

export default LoginScreen
