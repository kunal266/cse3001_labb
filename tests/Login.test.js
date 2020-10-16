import 'react-native';
import React from 'react';
import Login from '../screens/Login';
import renderer from 'react-test-renderer';
it ('check function and state',()=>{
    let LoginData=renderer.create(<Login/>).getInstance();
    expect(LoginData.state.email).toEqual("Team20");
    // console.log(Login.state.email);
})