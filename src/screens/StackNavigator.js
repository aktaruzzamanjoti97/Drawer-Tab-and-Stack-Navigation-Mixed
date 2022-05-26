import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountDetailsScreen from '../components/AcountDetailsScreen';
import DetailsScreen from '../components/DetailsScreen';
import EditProfileScreen from '../components/EditProfileScreen';
import {TabNavigator} from './TabNavigator';
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route) ?? 'Home';
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AccountDetail" component={AccountDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
