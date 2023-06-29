import React from "react";
import { View } from "react-native/types";
import MenuButton from "../../Common/MenuButtton/MenuButton";
import PropTypes from 'prop-types'

function DrawerContainer (props:any): JSX.Element{
    const {navigation} = props
    return (
        <View>
            <View>
                <MenuButton
                title='HOME'
                onPress={()=>{
                    navigation.navigate('Home');
                    navigation.closeDrawer();
                }}/>
            </View>
        </View>

    )
}

DrawerContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
      }),
}
export default DrawerContainer;