import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 300,
        height: 60,
        borderWidth: 1,
        borderColor: props.color,
        backgroundColor: 'transparent',
        borderRadius: 10
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      botaoTexto: {
        color: props.color,
        fontSize: 25,
        fontWeight: 'bold'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class BiscoitoDaSorte extends Component {

  constructor(props) {
    super(props);
    this.state = { texto: '¬' };

    this.frases = [
      'Enfrente os problemas e leve a melhor!', 'Dê mais atenção ao que você tem de bom na sua vida',
      'Para chegar ao topo, o que importa é começar!', 'De nada adianta ter sonhos, se você não se empenhar em correr atrás.',
      'Preste atenção nas oportunidades que estão à sua frente!'
    ];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    let s = this.state;
    let random = Math.floor(Math.random() * this.frases.length);

    s.texto = this.frases[random];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./img/biscoito.png')} />
    <Text style={styles.texto}>"{this.state.texto}"</Text>
        <Botao color="blue" text="Quebrar Biscoito" onPress={this.quebrarBiscoito} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 18,
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})
