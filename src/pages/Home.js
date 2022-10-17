import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import NewsIcon from '../public/Icons/news.svg';
import AnouncIcon from '../public/Icons/announcement.svg';
import OpdIcon from '../public/Icons/opd.svg';
import ArticleIcon from '../public/Icons/article.svg';
import InfoIcon from '../public/Icons/info.svg'

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#2F3270'}}>
      {/* <View>
      <TouchableHighlight style={{width: '100%', flexDirection: 'row', justifyContent:'flex-end', padding: 15, height: '5%'}} onPress={()=> navigation.navigate('InfoApp')}>
        <InfoIcon height={25} width={25}/>
      </TouchableHighlight>
      </View> */}
    <View style={{backgroundColor: '#174661', borderTopRightRadius: 100, borderBottomLeftRadius: 100, height: '100%', position: 'relative'}}>
    <View style={{backgroundColor: '#226168', borderTopRightRadius: 150, borderBottomLeftRadius: 150, height: '100%', position: 'absolute', width: '100%'}}>
    <View style={{backgroundColor: '#2893A0', borderTopRightRadius: 225, borderBottomLeftRadius: 225, height: '100%', position: 'absolute', width: '100%'}}>
    <View style={styles.homeSecreen}>
      <View style={styles.header}>
        <View style={{borderRadius: 50, width: 100, height: 100, position: 'relative'}}>
          <Image source={require('../public/Icons/logoBeltim.png')} style={{width: 70, height: 70, position: 'absolute', top: 20, left: 15}}/>
        </View>
        <View style={{paddingVertical: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>DINAS KOMUNIKASI DAN INFORMATIKA</Text>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>KABUPATEN BELITUNG TIMUR</Text>
        </View>
      </View>
      <View>
        <View>
          <TouchableHighlight onPress={() => navigation.navigate('News')} underlayColor={false}>
            <View style={styles.card}>
              <NewsIcon style={styles.icon} height={30} width={30}/>
              <Text style={styles.title}>Berita Utama</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Opd')} underlayColor={false}>
            <View style={styles.card}>
              <OpdIcon height={30} width={30}/>
              <Text style={styles.title}>Info Opd</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Article')} underlayColor={false}>
            <View style={styles.card}>
              <ArticleIcon height={30} width={30}/>
              <Text style={styles.title}>Artikel</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Announcement')} underlayColor={false}>
            <View style={styles.card}>
              <AnouncIcon height={25} width={30}/>
              <Text style={styles.title}>Pengumuman</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View>
      </View>
    </View>
    <View style={styles.footer}>
          <Image source={require('../public/Icons/copyright.png')} style={{height: 15, width: 15, marginVertical: 4, marginRight: 5}}/>
            <Text style={{color: '#fff', marginRight: 5}}>2022</Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: '#fff'}}>| Dinas Kominfo Belitung Timur</Text>
          </View>
        </View>
        </View>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    width: 300,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeSecreen: {
    width: '100%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 250,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  icon: {
    width: '30%',
  }, 
  title: {
    padding: 5,
    width: '70%',
    textAlign: 'center',
    fontSize: 15
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'center'
  }
});
