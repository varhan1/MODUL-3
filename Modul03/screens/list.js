import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Modal,
    Pressable,
  } from "react-native";
  import { useState } from "react";
  
  // Dummmy Data (Array of Object)
  const datas = [
    {
      id: 1,
      title:
        "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 2,
      title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 3,
      title:
        "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 4,
      title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 5,
      title:
        "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 6,
      title:
        "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 7,
      title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
    },
    {
      id: 8,
      title:
        "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 9,
      title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
      id: 10,
      title:
        "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
      image:
        "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
  ];
  
  // Functional Component
  const List = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    const [itemSelect, setItemSelect] = useState('variabel kosong');

    console.log(itemSelect);
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.view} onPress={() => {setModalVisible(true); setItemSelect(item)}}>
            <View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={ModalVisible}
                    onRequestClose={() =>{
                    setModalVisible(!ModalVisible);
                    }}>
                        <View style={styles.modalView}>
                            <Image style={styles.modalImage} source={{ uri: itemSelect.image }} />
                            <Text>{itemSelect ? itemSelect.title : 'test'}</Text>
                            <View style={{  alignItems: 'center'}}>
                        <Pressable
                        style={[ styles.button, styles.buttonClose ]}
                        onPress={() => setModalVisible(!ModalVisible)}>
                        <Text style={{ padding: 8 }}>CLOSE</Text>
                        </Pressable>
                            </View>
                        </View>
                </Modal>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};
  
    return (
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  // Styles
  const styles = StyleSheet.create({
    view: {
      padding: 15,
      borderBottomColor: "#dddddd",
      borderBottomWidth: 1,
      },
      image: {
      height: 200,
      width: null,
      },
      text: {
      fontSize: 18,
      paddingTop: 10,
      },
      modalView: {
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          marginTop: 200,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 30,
          alignItems: 'center',
          shadowColor: '#0d0d0d',
          shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#eeeeee',
      },
      modalImage: {
          height: 250,
          width: '90%',
          borderRadius: 15,
          marginBottom: 20,
      },
  });
  
  export default List;