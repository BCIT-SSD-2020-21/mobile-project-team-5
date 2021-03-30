import React, { useState, useContext } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AuthContext } from "../context/AuthProvider"

const RegisterScreen = ({ navigation }) => {
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login")
        }}
      >
        <Text>Already have an account?</Text>
      </TouchableOpacity>

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})

export default RegisterScreen
