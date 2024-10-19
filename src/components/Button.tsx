import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 16
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 42,
        fontWeight: 400
    },
    primaryButton: {
        backgroundColor: '#394c45'
    },
    primaryText: {
        color: 'white'
    },
    secondaryButton: {
        backgroundColor: '#EDEDED',
        borderColor: '#394c45',
        borderWidth: 0.5
    },
    secondaryText: {
        color: '#394c45'
    },
    tertiaryButton: {
        backgroundColor: '#f1c514'
    }
})

export enum ButtonType {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    TERTIARY = 'TERTIARY'
}

interface ButtonProps {
    buttonText?: string;
    type?: ButtonType;
    onPress?: () => void
}

export const Button: FC<ButtonProps> = ({ buttonText = 'Button', type, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, type === ButtonType.PRIMARY && styles.primaryButton, type === ButtonType.SECONDARY && styles.secondaryButton,, type === ButtonType.TERTIARY && styles.tertiaryButton]}>
        <Text style={[styles.buttonText, type === ButtonType.PRIMARY && styles.primaryText, type === ButtonType.SECONDARY && styles.secondaryText]}>{buttonText}</Text>
    </TouchableOpacity>
)