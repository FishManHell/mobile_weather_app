import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Temperature from "./components/Temperature/Temperature";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

export default function App() {
    const {loading, error, data} = useFetch("https://jsonplaceholder.typicode.com/todos/1", {method: "GET"});

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Temperature {...data}/>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
