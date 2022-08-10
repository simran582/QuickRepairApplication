import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, Switch} from 'react-native';
import { DrawerContentScrollView , DrawerItem} from '@react-navigation/drawer';
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import WelcomeScreen from '../Screens/WelcomeScreen';
import color from '../config/color';
import {useNavigation} from "@react-navigation/native";
import ServiceDetail from '../Screens/Services/ServiceDetail';
import HomeScreen from '../Screens/HomeScreen';


function DrawerContent(props) {
  const navigation= useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const [nestedDrawerItem, setNestedDrawerItem] = useState(false);

  const NestedDrawerItem = () => {
    if (nestedDrawerItem == true) {
      setNestedDrawerItem(false);
    } else {
      setNestedDrawerItem(true);
    }
  };

  
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section>
              <View style={styles.avatar}>
                <Image
                  source={require("../assets/drawerpic.jpeg")}
                  resizeMode={"stretch"}
                  style={styles.avatarlogo}
                >
                </Image>
              </View>
            </Drawer.Section>
            <Drawer.Section style={styles.section}>
            <DrawerItem
              icon={() => (
                <MaterialCommunityIcons
                  name="home"
                  size={25}
                  color={color.black}
                />
              )}
              label={() => <Text style={styles.drawerItem}>Home</Text>}
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.section}>
            <DrawerItem  label={() => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.drawerItem}>Choose Services</Text>
                  {
                    nestedDrawerItem == true && (
                      // icon=
                      // {() => (
                      <MaterialCommunityIcons
                        name="menu-up"
                        size={25}
                        color={color.black}
                      />
                    )
                    // )}
                  }
                  {nestedDrawerItem == false && (
                    <MaterialCommunityIcons
                      name="menu-down"
                      size={25}
                      color={color.black}
                    />
                  )}
                </View>
              )}
              onPress={() => {
                NestedDrawerItem();
              }}
              icon={() => (
                <MaterialCommunityIcons
                  name="menu-open"
                  size={25}
                  color={color.black}
                />
              )}
            /> 
            {nestedDrawerItem == true && (
              <DrawerItem
              icon={() => (
                <MaterialCommunityIcons
                  name="hammer-screwdriver"
                  size={20}
                  color={color.black}
                />
              )}
                style={{ marginLeft: "10%" , borderWidth: 1, borderColor: color.light, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}
                label={() => (
                  <Text style={styles.drawerSubItem}>Plumber</Text>
                )}
              />
            )}
             {nestedDrawerItem == true && (
              <DrawerItem
              icon={() => (
                <MaterialIcons
                  name="carpenter"
                  size={20}
                  color={color.black}
                />
              )}
                style={{ marginLeft: "10%" , borderWidth: 1, borderColor: color.light, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}
                label={() => (
                  <Text style={styles.drawerSubItem}>Carpenter</Text>
                )}
                onPress={() => {
                  props.navigation.navigate("ServiceDetail", {
                    category: "Carpenters",
                  });
                }}
              />
            )}
             {nestedDrawerItem == true && (
              <DrawerItem
              icon={() => (
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="format-paint"
                  size={20}
                  color={color.black}
                />
              )}
                style={{ marginLeft: "10%" , borderWidth: 1, borderColor: color.light, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}
                label={() => (
                  <Text style={styles.drawerSubItem}>Painting</Text>
                )}
                onPress={() => {
                  props.navigation.navigate("ServiceDetail", {
                    category: "Painting",
                  });
                }}
              />
            )}
             {nestedDrawerItem == true && (
              <DrawerItem
              icon={() => (
                <MaterialIcons
                  name="cleaning-services"
                  size={20}
                  color={color.black}
                />
              )}
                style={{ marginLeft: "10%" , borderWidth: 1, borderColor: color.light, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}
                label={() => (
                  <Text style={styles.drawerSubItem}>Cleaning </Text>
                )}
                onPress={() => {
                  props.navigation.navigate("ServiceDetail", {
                    category: "Cleaning",
                  });
                }}
              />
            )}
             {nestedDrawerItem == true && (
              <DrawerItem
              icon={() => (
                <MaterialIcons
                  name="electrical-services"
                  size={20}
                  color={color.black}
                />
              )}
                style={{ marginLeft: "10%" , borderWidth: 1, borderColor: color.light, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}
                label={() => (
                  <Text style={styles.drawerSubItem}>Electrician </Text>
                )}
                onPress={() => {
                  props.navigation.navigate("ServiceDetail", {
                    category: "Electric",
                  });
                }}
              />
            )}
             {nestedDrawerItem == true && (
              <DrawerItem
              icon={() => (
                <MaterialIcons
                  name="local-laundry-service"
                  size={20}
                  color={color.black}
                />
              )}
                style={{ marginLeft: "10%" , borderWidth: 1, borderColor: color.light, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}
                label={() => (
                  <Text style={styles.drawerSubItem}>Laundry</Text>
                )}
                onPress={() => {
                  props.navigation.navigate("ServiceDetail", {
                    category: "Laundry",
                  });
                }}
              />
            )}
          </Drawer.Section>
            </View>
            </DrawerContentScrollView>
        <Drawer.Section style={styles.section}>
        <DrawerItem
          label={() => <Text style={styles.drawerItem}>Sign Out</Text>}
          onPress={() => {
            props.navigation.navigate("WelcomeScreen");
          }}
          icon={() => (
            <MaterialCommunityIcons
              name="logout"
              size={25}
              color={color.black}
            />
          )}
        />

            
      </Drawer.Section>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: theme.background,
      },
      avatar: {
        backgroundColor: color.white,
      },
      avatarlogo: {
        marginTop: 20,
        width: 250,
        height: 150,
        alignSelf: "center",
        shadowOffset: {width: 2, height: 10},
        shadowOpacity: 1,
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: color.white,
      },
      drawerItem: {
        color: color.black,
        fontWeight: "bold",
        fontSize: 14,   
      },
      section: {
        //borderColor: color.black,
       // borderWidth: 1,
        //borderRadius: 15,
      },
      drawerSubItem: {
        color: color.black,
        fontWeight: "bold",
      },

     
})
export default DrawerContent;