import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import FeedbackForm from "./components/Form/Form";
import Header from "./components/Header/Header";
import MenuItems from "./components/MenuItems/MenuItems";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.bodyText}>
        <Body />
        {/* <MenuItems /> */}
      </View>
      {/* <View style={styles.footerContainer}>
        <Footer />
      </View> */}
    </View>
  );
}

// export default function App (){
//     return (
//       <>
//         <View style={styles.container}>
//           <FeedbackForm />
//         </View>
//       </>
//     )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  headerContainer: {
    flex: 1.4,
    // backgroundColor: '#495E57'
  },
  footerContainer: {
    flex: 0.5,
  
  },
  bodyText: {
    flex: 11,
    // backgroundColor: "blue"
  },
});
