import useFetch from "@/hooks/useFetch";
import {ActivityIndicator, View} from "react-native";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {StatusBar} from "expo-status-bar";
import {homeApiUrl} from "@/helpers/api";
import Home from "@/components/Home/Home";

export default function Index() {
  const {loading, data} = useFetch(homeApiUrl(), {method: "GET"});

  return (
      <View style={{flex: 1, backgroundColor: "yellow"}}>
          <Header/>
          {loading ? <ActivityIndicator size={"large"} color={"#0000ff"} /> : <Home {...data}/>}
          <Footer/>
          <StatusBar style="auto" />
      </View>
  );
}
