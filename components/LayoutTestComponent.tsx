import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ToggleComponent from "@/components/ToggleComponent";

export default function LayoutTestComponent() {
    const [flexDirection, setFlexDirection] = React.useState('row');
    const [justifyContent, setJustifyContent] = React.useState('center');
    const [alignItems, setAlignItems] = React.useState('center');
    const layoutStyle = {flexDirection};
    const justifyContentStyle = {justifyContent};
    const alignItemsStyle = {alignItems};

    return<View>
        <ToggleComponent
            label={'flexione suas direções'}
            options={flexDirectionOptions}
            value={flexDirection}
            onChange={(option: React.SetStateAction<string>)=>setFlexDirection(option)} />

        <ToggleComponent
            label={'justifique seu conteúdo'}
            options={justifyContentOptions}
            value={justifyContent}
            onChange={(option: React.SetStateAction<string>)=>setJustifyContent(option)} />

        <ToggleComponent
            label={'alinhe seus itens'}
            options={alignItemsOptions}
            value={alignItems}
            onChange={(option: React.SetStateAction<string>)=>setAlignItems(option)} />

        <View style={[styles.boxContainer, layoutStyle, justifyContentStyle, alignItemsStyle]}>
            <View style={styles.box}><Text>1</Text></View>
            <View style={styles.box}><Text>2</Text></View>
            <View style={styles.box}><Text>3</Text></View>
        </View>

    </View>
}

const flexDirectionOptions = ['row', 'column', 'row-reverse', 'column-reverse'];
const justifyContentOptions = ['flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'];
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'];

const styles = StyleSheet.create({
    box: {
        width: 60,
        height: 60,
        backgroundColor: 'tomato',
        borderRadius:4,
        margin: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxContainer: {
        marginTop: 8,
        display: "flex",
        width: '100%',
        height: 500,
        backgroundColor: 'moccasin',
    }
})