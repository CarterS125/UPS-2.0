import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { useTailwind } from "tailwind-rn/dist";
import DeliveryCard from "../components/DeliveryCard";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParamList } from "../navigator/TabNavigator";

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>();

  const tw = useTailwind();

  const navigation = useNavigation<CustomerScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#EB6A7C",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "Deliveries",
    });
  }, [order]);

  return (
    <View style={tw("-mt-2")}>
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};

export default OrderScreen;
