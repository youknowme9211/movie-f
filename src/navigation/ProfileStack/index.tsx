import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

import ProfileScreen from '@/screens/ProfileScreen';
import MovieDetailScreen from '@/screens/MovieDetailScreen';

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack