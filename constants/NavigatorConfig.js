import {Platform} from 'react-native';
import {headerHeight} from './Dimensions';
import Colors from './Colors';

export const defaultNavigatorConfig = ({
  screenProps: {statusBarHeight},
  navigationOptions,
}) => ({
  ...navigationOptions,
  headerStyle: {
    backgroundColor: Colors.divider,
    ...Platform.select({
      android: {
        paddingTop: statusBarHeight,
        height: headerHeight / 2 + statusBarHeight,
      },
    }),
    ...navigationOptions.headerStyle,
  },
  headerTintColor: Colors.secondaryText,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
