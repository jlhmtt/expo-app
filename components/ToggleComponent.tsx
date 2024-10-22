import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ToggleComponent({label, options, value, onChange}:any) {
    return(
        <View style={styles.container}>
        <Text>{label}</Text>
            <View style={styles.optionsContainer}>

            {
                options.map(
                    (option: any) => (
                    <Button
                        color={'cornflowerblue'}
                        title={option}
                        onPress={()=> onChange(option)}
                        key={option}
                    />
                ))
            }


            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    optionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
    }
})