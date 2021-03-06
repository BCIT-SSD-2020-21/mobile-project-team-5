import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Button } from "react-native"

import SearchScreen from "../../screens/SearchScreen"
import DetailScreen from "../../screens/DetailScreen"
import { signOut } from "../../firebase/config"

const SearchScreenStack = createStackNavigator()
function SearchScreenNavigator({user}) {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: { backgroundColor: "#1D3557" },
          headerTitleStyle: { color: "#FFFFFF" },
          cardStyle: { backgroundColor: "#1D3557" },
          headerRight: () => (
            <Button
              onPress={() => {
                signOut()
              }}
              title="Logout"
              color="#000"
            />
          ),
        }}
      />
      <SearchScreenStack.Screen
        name="Detail"
        options={{
          headerRight: () => (
            <Button
              onPress={() => {
                signOut()
              }}
              title="Logout"
              color="#000"
            />
          ),
        }}
      >
        {(props) => <DetailScreen {...props} user={user} />}
      </SearchScreenStack.Screen>
    </SearchScreenStack.Navigator>
  )
}

export default SearchScreenNavigator
