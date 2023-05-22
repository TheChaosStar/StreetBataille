import React from 'react';
import { StyleSheet, View, Button, TextInput, Text, Pressable } from 'react-native';
import { Formik } from 'formik'
import { LinearGradient } from 'expo-linear-gradient';
import Instance from '../functions/token'


export default function Connect() {
    return (
        <LinearGradient
            colors={['#99004D', '#FF0080']}
            style={styles.body}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
        >
            <View style={styles.container}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => {
                        Instance.get("/cards")
                            .then(res => console.log(res))
                            .catch(error => console.log(error));
                        // check email and password with axios [values.email, values.password]
                        //getToken(values.email, values.password);

                    }}
                >
                    {
                        ({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <View>
                                    <LinearGradient
                                        colors={['#99004D', '#FF0080']}
                                        style={styles.underlineTitle}
                                        start={[0.0, 0.5]}
                                        end={[1.0, 0.5]}
                                    />
                                    <Text style={styles.title}>Login</Text>
                                </View>

                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder='Enter Your Email'
                                    />
                                    <View style={styles.underline}></View>
                                </View>
                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.textInput}
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder='Enter Your Password'
                                    />
                                    <View style={styles.underline}></View>
                                </View>
                                <View style={styles.inputBox}>
                                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                                        style={styles.linearGradient}
                                        start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
                                        <Pressable style={styles.button} onPress={handleSubmit}>
                                            <Text style={styles.buttonText}>test</Text>
                                        </Pressable>
                                    </LinearGradient>
                                </View>
                            </View>
                        )
                    }

                </Formik>
                {/*
                <View style={styles.option}><Text>or Connect width Social Media</Text></View>
                 <View><Text>twitter</Text></View>
                <View><Text>facebook</Text></View> 
*/}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        backgroundColor: "#fff",
        maxWidth: 350,
        width: "100%",
        paddingHorizontal: 25,
        paddingVertical: 30,
        borderRadius: 5,

        shadowColor: "#000",
        elevation: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: 600,
        marginTop: 20,
        marginBottom: -5,
        marginLeft: 0,
        marginRight: 0,
    },

    underlineTitle: {
        content: '',
        position: 'absolute',
        height: 4,
        width: 33,
        bottom: -3,
        left: 0,
        borderRadius: 5,
    },

    inputBox: {
        width: "100%",
        height: 45,
        marginTop: 25,
        position: 'relative',
    },

    textInput: {
        height: "100%",
        width: "100%",
        fontSize: 16,
    },

    underline: {
        position: 'absolute',
        content: '',
        height: 2,
        width: '100%',
        backgroundColor: '#ccc',
        left: 0,
        bottom: 0,
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#00000000',
        color: '#ffffff',
    },
});
