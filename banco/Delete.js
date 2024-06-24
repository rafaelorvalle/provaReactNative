import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Remove() {
    const [id, setId] = useState('');

    const remove = async () => {

        try {
            db = await create();
            let result = await db.runAsync(`DELETE FROM senhas where id = ?;`, id);
            if (result.changes > 0) {
                Alert.alert(
                    'Success',
                    'Senha removida',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Error ao remover senha');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, width: "80%" }}>
            <TextInput
                placeholder="Entre com o id da senha"
                onChangeText={
                    id => setId(id)
                }
                style={{ padding: 2 }}
            />
            <Button title="Delete" onPress={() => remove()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        margin: 12,
        borderWidth: 1,
    },
});