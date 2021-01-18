import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import RNText from "../../components/RNText";
import Icon from "react-native-vector-icons/Feather";
import DetailChallenge from "../../components/DetailChallenge";
import {
  Container,
  Content,
  Header,
  Welcome,
  Top,
  TopSave,
  TopTextSave,
} from "./styles";

const Briefing = () => {
  const [file, setFile] = useState<any>(true);
  const [prototype, setPrototype] = useState(true);
  const [files, setFiles] = useState<any>(true);

  const nav = useNavigation();
  return (
    <Container contentInsetAdjustmentBehavior="automatic">
      <Header>
        <Welcome>
          <Top>
            <TouchableOpacity onPress={() => nav.navigate("Home")}>
              <Icon name="arrow-left" size={32} color="#213A4A" />
            </TouchableOpacity>
            <RNText size={24} bold color="#213A4A">
              Projeto
            </RNText>
            <TopSave>
              <Icon name="bookmark" size={32} color="#213A4A" />
              <TopTextSave>Salvar{"\n"}projeto</TopTextSave>
            </TopSave>
          </Top>
        </Welcome>
      </Header>
      <Content>
        <DetailChallenge
          handleSubmit={() => {
            if (!!file && !!prototype && !!files) {
              alert("Projeto enviado com sucesso, Boa sorte!");
            }
          }}
          hours={45}
          partner="Shawee"
          stack="UX Design"
          title="Melhorando a XP"
          children=""
          description="Encontrar um problema de usabilidade em nossa plataforma e prototipar uma solução, justificando sua proposta."
          date="Data maxima para avaliação: 25 Jan 2021"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 356,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          <RNText bold color="#213A4A">
            Capa do projeto
          </RNText>
          <RNText size={12}>(500px X 285px )</RNText>
          <View></View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            DocumentPicker.getDocumentAsync().then((data) => {
              setFile(data);
            });
          }}
          style={{
            backgroundColor: "#FFF",
            width: 356,
            height: 46,
            borderRadius: 8,
            padding: 8,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            style={{ marginLeft: 10, marginRight: 32 }}
            name="attach-file"
            size={24}
            color="#213A4A"
          />
          <RNText bold size={12} color="#213A4A">
            Adicionar arquivo
          </RNText>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 356,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          <RNText bold color="#213A4A">
            Link Protótipo navegável
          </RNText>
          <RNText size={12}></RNText>
          <View></View>
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            width: 356,
            height: 46,
            borderRadius: 8,
            padding: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "#4AF5D3",
              height: 46,
              width: 74,
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <RNText bold size={12} color="#FFFFFF">
              WWW.
            </RNText>
          </View>
          <TextInput
            onChangeText={(text) => setPrototype(text)}
            style={{ width: 260, height: 46 }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 356,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          <RNText bold color="#213A4A">
            Arquivos adicionais
          </RNText>
          <View></View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            DocumentPicker.getDocumentAsync().then((data) => {
              setFiles(data);
            });
          }}
          style={{
            backgroundColor: "#FFF",
            width: 356,
            height: 46,
            borderRadius: 8,
            padding: 8,
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 32,
          }}
        >
          <MaterialIcons
            style={{ marginLeft: 10, marginRight: 32 }}
            name="attach-file"
            size={24}
            color="#213A4A"
          />
          <RNText bold size={12} color="#213A4A">
            Adicionar arquivo
          </RNText>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default Briefing;
