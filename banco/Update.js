import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Update() {
    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');    

    const update = async () => {

        try {
            db = await create();
            let result = await db.runAsync(`UPDATE senhas SET senha = ? WHERE id = ?;`, [senha, id]);
            if (result.changes > 0) {
                Alert.alert(
                    'Sucesso',
                    `Senha alterada com sucesso e salva no banco de dados: ${senha}`,
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Erro atualizando senha');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ backgroundColor: 'white', marginBottom: 70, width: "80%" }}>
            <TextInput
                placeholder="Entre com o id da senha"
                onChangeText={
                    id => setId(id)
                }
                style={{ padding: 2 }}
            />
            <TextInput
                placeholder="Entre com a nova senha"
                onChangeText={
                    senha => setSenha(senha)
                }
                style={{ padding: 2 }}
            />
            <Button title="Atualizar senha" onPress={() => update()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});