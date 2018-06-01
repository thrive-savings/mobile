import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  View,
  Text
} from "native-base";

import styles from "./styles";

const deleteIcon = require("../../../assets/Icons/Delete/delete.png");

const getModalContent = (props) => {
  let { label, value, onPress } = props;
  if (!label) {
    label = "Enter amount.";
  }
  if (!value) {
    value = "$0.00";
  }
  if (!onPress) {
    onPress = (num) => {};
  }

  const hitSlopAmounts = {top: 30, bottom: 30, left: 30, right: 30};

  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <Text style={styles.amountText}>{value}</Text>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={[styles.elem, styles.transparentLeft, styles.transparentTop]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(1)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.elem, styles.transparentTop]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(2)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.elem, styles.transparentRight, styles.transparentTop]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(3)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>3</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.elem, styles.transparentLeft]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(4)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.elem}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(5)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.elem, styles.transparentRight]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(6)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>6</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.elem, styles.transparentLeft]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(7)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.elem}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(8)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.elem, styles.transparentRight]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(9)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>9</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.elem, styles.transparentLeft, styles.transparentBottom]} />
          <View style={[styles.elem, styles.transparentBottom]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(0)} hitSlop={hitSlopAmounts}>
              <Text style={styles.elemText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.elem, styles.transparentRight, styles.transparentBottom]}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(-1)} hitSlop={hitSlopAmounts}>
              <Image source={deleteIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default getModalContent;
