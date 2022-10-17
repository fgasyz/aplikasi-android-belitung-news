import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RadioGroup from 'react-native-radio-buttons-group';

export default class FilterData extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        radioButtons: 'Apple'
      }

  }

   radioButtonsData = [
      {
        id: '1',
        label: 'kurang dari 10',
        value: 10,
        borderColor: '#2893A0',
        color: '#2893A0',
        size: 20
      },
      {
        id: '2',
        label: 'kurang dari 20',
        value: 20,
        borderColor: '#2893A0',
        color: '#2893A0',
        size: 20
      },        
      {
        id: '3',
        label: 'kurang dari 30',
        value: 30,
        borderColor: '#2893A0',
        color: '#2893A0',
        size: 20
      },
      {
        id: '4',
        label: 'kurang dari 40',
        value: 40,
        borderColor: '#2893A0',
        color: '#2893A0',
        size: 20
      },
      {
        id: '5',
        label: 'kurang dari 50',
        value: 50,
        borderColor: '#2893A0',
        color: '#2893A0',
        size: 20
      },
  ];

  setValue = (value) => {
    var newArray = value.filter((item)=>item.selected===true);
    console.log(newArray[0].value)
    this.setState({radioButtons: newArray[0].value}); 
  };

  render() {
    return (
      <View style={styles.containerFilter}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <RadioGroup
            containerStyle={{justifyContent: 'space-between'}}
            layout='row'
            radioButtons={this.radioButtonsData}
            onPress={(value) => this.setValue(value)}/>
          </ScrollView>
      </View>
    )

  }
}

const styles = StyleSheet.create({
    containerFilter: {
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: 10
      },
})