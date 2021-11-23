import React, { useState } from "react";
import { Text, TouchableOpacity , View,Modal, Pressable} from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import DropDownPicker from 'react-native-dropdown-picker';

const Filters = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([
    {label: 'Dog', value: 'Dog'},
    {label: 'Cat', value: 'Cat'},
    {label: 'Giraffe', value: 'Giraffe'},
    {label: 'your mom', value: 'your mom'},
    {label: 'your sister', value: 'your sister'},
    {label: 'your step sis', value: 'your step sis'}

  ]);

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
            <Text style={styles.modalHeader}>Filters</Text>
            <Text style={styles.modalText}>Animal type</Text>
            
            <DropDownPicker style={styles.dropdown}
              mode="BADGE"
              badgeColors={["#2CD27F", "#DAACFA", "#CDD47A","#97DA97","#EC6969","#9F9999","#7A6CF9","#541C29"]}
              open={open}
              value={value}
              items={items}
              showBadgeDot={true}
              searchable={true}
              loading={loading}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              multiple={true}
              max={5}
            />

            <Text style={styles.modalText}>Age</Text>
            <Text style={styles.modalText}>Distance</Text>
            

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
};
  /*<TouchableOpacity style={styles.filters} >
    <Text style={styles.filtersText}>
      <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
    </Text>
  </TouchableOpacity>
);*/

export default Filters;
