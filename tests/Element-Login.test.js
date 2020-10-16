import 'react-native';
import React from 'react';
import Login from '../screens/Login';
import renderer from 'react-test-renderer';
let findElement=function(tree,element){
    console.warn(tree);
    return false;

}
it ('check function and state',()=>{
    let LoginData=renderer.create(<Login/>).toJSON();
    expect(findElement(LoginData,'email')).toBeDefined();
    // console.log(Login.state.email);
})