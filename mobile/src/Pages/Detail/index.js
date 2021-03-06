import React from "react";
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const navigateBack = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: "Heroi do caso: cadelinha atropelada",
      recipients: ["vilela.leoo@gmail.com"],
      body: "testando",
    });
  };

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=+5541991427778&text=teste`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
