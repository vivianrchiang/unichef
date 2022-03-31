// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
 import { SafeAreaProvider } from 'react-native-safe-area-context';

 import useCachedResources from './hooks/useCachedResources';
 import useColorScheme from './hooks/useColorScheme';
 import Navigation from './navigation';

// export default function App() {
  //  const isLoadingComplete = useCachedResources();
  //  const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { varIsLogin } from './screens/AuthScreen';

import { AuthScreen } from './screens';




function App() {
  var loggedIn = varIsLogin();
//   const isLoadingComplete = useCachedResources();
 const colorScheme = useColorScheme();
  
  if (loggedIn == false) {
    // if (!isLoadingComplete) {
    //   return null;
    // } else if (loggedIn == false){
    return (
      <View style={styles.container}>
        <AuthScreen />
        <StatusBar style="auto" />
      </View>

      //     return (
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      // </SafeAreaProvider>
//     );
    );
//   } else {
//     return (
//       <View style={styles.container}>
//       <AuthScreen />
//       <StatusBar style="auto" />
//     </View>
//     )
//   };
 } else {
  return (
    // <View style={styles2.container}>
    //   <AuthScreen />
    //   <StatusBar style="auto" />
    // </View>
          <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
  )
  }
}
export {App};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// const styles2 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import { AuthScreen } from './screens';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AuthScreen />
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });