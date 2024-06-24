import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Insert() {
    const [senha, setSenha] = useState('');

    function gerarSenhaAleatoria() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let senha = '';
        for (let i = 0; i < 8; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indiceAleatorio);
        }  
        setSenha(senha);
        return senha;
    }

    const insert = async () => {

        try {
            db = await create();
            let senha = gerarSenhaAleatoria();
            let result = await db.runAsync(`INSERT INTO senhas (senha) VALUES (?);`, senha);
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    `Senha gerada com sucesso e salva no banco de dados: ${senha}`,
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Erro registando senhas');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ backgroundColor: 'white', marginTop: 70, width: "80%" }}>
            <Button title="gerar nova senha" onPress={() => insert()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});