import React, { useState } from "react";
import { Text, TouchableOpacity ,StyleSheet,View ,Modal,Pressable,Alert} from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const Filters = () => {


  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.filters}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filters</Text>
            <Pressable
              style={[styles.filters, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            <Pressable
              style={[styles.filters, styles.buttonDangerClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>

          </View>
        </View>
        
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.filtersText}>
        <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
        </Text>
      </TouchableOpacity>
      
    </View>
  );
  /*<TouchableOpacity style={styles.filters} >
    <Text style={styles.filtersText}>
      <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
    </Text>
  </TouchableOpacity>*/
}
export default Filters;
