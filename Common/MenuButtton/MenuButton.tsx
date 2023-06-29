import React from "react";
import { Text, TouchableHighlight, View } from "react-native/types";
import PropTypes from "prop-types";

function MenuButton (props:any): JSX.Element{
    const {onPress,source,title} = props
    return(
        <TouchableHighlight onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableHighlight>
    )
}
MenuButton.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string,
  };

export default MenuButton;