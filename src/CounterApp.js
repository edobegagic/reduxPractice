import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dugmad}>
          <TouchableOpacity
            onPress={() => this.props.decreaseCounter()}
            style={[
              styles.dugme,
              { backgroundColor: "lightcoral", borderColor: "#CC604F" }
            ]}
          >
            <Text style={styles.slova}>-</Text>
          </TouchableOpacity>
          <Text style={styles.broj}>{this.props.counter}</Text>
          <TouchableOpacity
            onPress={() => this.props.increaseCounter()}
            style={[
              styles.dugme,
              { backgroundColor: "lightblue", borderColor: "#4FBDCC" }
            ]}
          >
            <Text style={styles.slova}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    backgroundColor: "lightyellow"
  },
  dugmad: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  dugme: {
    height: 90,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  slova: {
    color: "white",
    fontWeight: "bold",
    fontSize: 70,
    paddingBottom: 7
  },
  broj: {
    color: "lightcoral",
    fontWeight: "bold",
    fontSize: 50,
    paddingTop: 10
  }
});
