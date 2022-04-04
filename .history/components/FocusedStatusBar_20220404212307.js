import { StatusBar } from 'react-native';
import { useIsFocused } from 'react-navigation/core';

const FocusStatusBar = () => {
  const isFocused = useIsFocused();

  return isFocused ? <Statusbar animated={true} {...props} /> : null;
}

export default FocusStatusBar