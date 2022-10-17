import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Linking,
  TextInput
} from 'react-native';
import React from 'react';
import axios from 'axios';
import ArrowBack from '../public/Icons/arrowback.svg';
import SearchIcon from '../public/Icons/searchIcon.svg'
import FilterIcon from '../public/Icons/filter.svg'
import FeedBack from '../Components/FeedBack';
import InfoOpd from './InfoOpd';
import FilterData from '../Components/FilterData';

export default class InitialOpd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opdinfo: [],
      filterdata: [],
      input: '',
      showModal: false,
      textModal: 'Silahkan berikan penilaian anda dengan menekan bintang.',
      showTabFilter: false,
    }

    this.onInputTextHandler = this.onInputTextHandler.bind(this);
    this.onShowModalFilter = this.onShowModalFilter.bind(this);
    this.onShowModalRating = this.onShowModalRating.bind(this);
    this.onHideModalRating = this.onHideModalRating.bind(this);
  }

//When Component is mounting
  componentDidMount() {
    this.getData();
    this.onShowModalRating();
  }

  getData = async () => {
    try {
      const result = await axios.get('https://portal.beltim.go.id/api/news', {
        params: {
          limit: 8,
          cat: 'Info Opd',
        },
      });

      this.setState({opdinfo: result.data})
      this.setState({filterdata: result.data})

    } catch (error) {
      console.log(error.message);
    }
  };

  onInputTextHandler = (text) => {
    this.setState({input: text.toLowerCase()});
    const item = this.state.filterdata.filter(data => data.title.toLowerCase().includes(this.state.input));
    if(this.state.input !== '') {
      if(item.length !== 0) {
        this.setState({filterdata: item});
      }
    }
    if(this.state.input === '') {
      this.setState({filterdata: this.state.opdinfo});
    }
  }

  onShowModalFilter = () => {
    if(this.state.showTabFilter === true) {
      this.setState({showTabFilter: false})
    }
    if(this.state.showTabFilter === false) {
      this.setState({showTabFilter: true})
    }
  }
  
  onShowModalRating = () => {
    setTimeout(() => {
      this.setState({showModal: true})
    }, 3000)
  }
  
  onHideModalRating = () => {
    this.setState({textModal: 'Terima kasih sudah memberikan penilaian :)'})
    setTimeout(()=> {
      this.setState({showModal: false})
    }, 3000)
  }


  render() {
    return (
      <View style={styles.parentContainer}>
        <FeedBack showModal={this.state.showModal} hideModal={this.onHideModalRating} textModal={this.state.textModal}/>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#2f3270',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10
          }}>
          <ArrowBack height={25} width={25} onPress={() => this.props.navigation.goBack()} />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            Info Opd
          </Text>
        </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchELement}>
                <TouchableHighlight underlayColor={'#CFD2CF'}>
                    <SearchIcon width={20} height={20}/>
                </TouchableHighlight>
                <TextInput onChangeText={(text) => this.onInputTextHandler(text)} style={{fontSize: 16, marginLeft: 10}} placeholder='Masukkan Kata Kunci'></TextInput>
            </View>
            <TouchableHighlight style={{backgroundColor: '#2F3270', width: '15%', justifyContent: 'center', alignItems: 'center'}} underlayColor={'#2F3270'} onPress={()=> this.onShowModalFilter()}>
                <View>
                  <FilterIcon height={20} width={20}/>
                </View>
            </TouchableHighlight>
            {this.state.showTabFilter && <FilterData/>}
        </View>
        <ScrollView
          style={{flexDirection: 'column'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containerCard}>
            {this.state.filterdata.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                  <TouchableHighlight
                    underlayColor={false}
                    onPress={()=>{ Linking.openURL(item.link)}}>
                    <View style={styles.card}>
                      <InfoOpd
                        title={item.title}
                        image={item.img}
                        onPublish={item.onPublish}
                        category={item.category}
                      />
                    </View>
                  </TouchableHighlight>

                  </React.Fragment>
                );
              })}
          </View>
        </ScrollView>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  parentContainer: {
    position: 'relative',
    flex: 1
  },
  containerCard: {
    position: 'relative'
  },  
  card: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    flexWrap: 'wrap'
  },
  searchELement: {
    paddingHorizontal: 20,
    backgroundColor: "#CFD2CF",
    alignItems: 'center',
    flexDirection: "row",
    width: '85%'
}
});
