import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Filme = () => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://m.media-amazon.com/images/S/pv-target-images/662512fdedf92aa2375c4514eeea620ff472a9740e389b8d3f73eea5e5bfc342.jpg' }} 
          style={styles.image}
          resizeMode="cover"
          onError={() => console.log("Erro ao carregar imagem")}
        />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Homem-Aranha: Sem Volta para Casa</Text>
        
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>2021</Text>
          <Text style={styles.separator}>•</Text>
          <Text style={styles.metaText}>Ação/Aventura</Text>
        </View>
        
        <Text style={styles.detail}><Text style={styles.label}>Diretor:</Text> Jon Watts</Text>
        <Text style={styles.detail}><Text style={styles.label}>Elenco:</Text> Tom Holland, Zendaya, Benedict Cumberbatch</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 10,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  imageContainer: {
    height: 700,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  metaText: {
    color: '#cccccc',
    fontSize: 14,
  },
  separator: {
    color: '#ff0000',
    marginHorizontal: 8,
  },
  detail: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 6,
  },
  label: {
    color: '#ff0000',
    fontWeight: '600',
  },
});

export default Filme;

