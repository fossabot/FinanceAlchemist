import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
interface AppRoute {
  name: string;
  icon: string;
  component: any;
}

export const HomeRoute: AppRoute = {
  name: 'registry',
  icon: 'book-open',
  component: HomeScreen,
}

export const SettingsRoute: AppRoute = {
  name: 'settings',
  icon: 'cog',
  component: SettingsScreen,
}

const AppRoutes: AppRoute[] = [
  HomeRoute,
  SettingsRoute,
  {name: 'about', icon: 'information', component: HomeScreen},
  {name: 'contact', icon: 'phone', component: HomeScreen},
  {name: 'help', icon: 'help', component: HomeScreen},
];

export default AppRoutes;