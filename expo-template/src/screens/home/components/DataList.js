import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/DataList';

const MydatasList = ({ datalist }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Data Section!</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {
          datalist.map((data, i) => (
            <View key={i} style={styles.dataCard}>
              <View style={styles.dataCartTopContainer}>
                <Text style={styles.dataCartTitle}>{data.title}</Text>
              </View>

              <View style={styles.dataCardBottonContainer}>
                <Text style={styles.dataCardMetaName}>
                  {data.name}
                </Text>
                <Text style={styles.dataCardMetaDate}>
              Mar 2m 6:00pm
                </Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  </View>
);

export default MydatasList;
