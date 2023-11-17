import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import icone from "../../assets/icone.png"

export function Limite() {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Image style={styles.icone} source={icone}/>
                <Text style={styles.textHeader}>Selecione</Text>
                <Text style={styles.textHeader}>seu novo limite</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder='R$' />
            </View>
            <TouchableOpacity style={styles.botao}>
                <View>
                    <Text style={styles.botaoText}>Definir</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around"
    },
    Header: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
    },
    icone: {
        width: 45,
        height: 45
    },
    textHeader: {
        fontSize: 24,
        color: "#000000",
        fontWeight: "700",
        lineHeight: 36
    },
    inputContainer: {
        marginBottom: 300,
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    inputText: {
        fontSize: 24,
        color: "#000000",
        fontWeight: "900",
        lineHeight: 36
    },
    botao: {
        padding: 20,
        width: "80%",
        height: 60,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: "#9500F6",
    },
    botaoText: {
        fontSize: 24,
        color: "#FFF",
        lineHeight: 26,
        alignSelf: "center",
    }
});