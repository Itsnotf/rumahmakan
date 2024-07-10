import {
    addDoc,
    collection,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "../firebase";
  
  // Mendapatkan semua data tentang kami
  export default async function getDataTentangKamiAll() {
    try {
      const tentangKamiCollectionRef = collection(db, "tentangkami");
      const tentangKamiSnapshot = await getDocs(tentangKamiCollectionRef);
  
      const tentangKamiData = [];
      tentangKamiSnapshot.forEach((doc) => {
        tentangKamiData.push({ idTentangKami: doc.id, ...doc.data() });
      });
  
      return tentangKamiData;
    } catch (error) {
      console.error("Error fetching all tentang kami data:", error);
      throw error;
    }
  }
  
  // Mendapatkan data tentang kami berdasarkan ID
  export async function getDataTentangKami(idTentangKami) {
    try {
      const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);
      const tentangKamiSnapshot = await getDoc(tentangKamiDocRef);
  
      if (tentangKamiSnapshot.exists()) {
        return tentangKamiSnapshot.data();
      } else {
        throw new Error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching tentang kami data:", error);
      throw error;
    }
  }
  
  // Menambahkan data tentang kami baru
  export async function tambahTentangKami(dataTentangKami) {
    try {
      const tentangKamiCollectionRef = collection(db, "tentangkami");
      const newTentangKamiRef = await addDoc(tentangKamiCollectionRef, dataTentangKami);
  
      return newTentangKamiRef.id;
    } catch (error) {
      console.error("Error menambahkan tentang kami:", error);
      throw error;
    }
  }
  
  // Mengubah data tentang kami berdasarkan ID
  export async function ubahTentangKami(idTentangKami, dataTentangKami) {
    try {
      const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);
      await updateDoc(tentangKamiDocRef, dataTentangKami);
  
      console.log("Tentang kami berhasil diubah");
    } catch (error) {
      console.error("Error mengubah tentang kami:", error);
      throw error;
    }
  }
  
  // Menghapus data tentang kami berdasarkan ID
  export async function hapusTentangKami(idTentangKami) {
    try {
      const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);
      await deleteDoc(tentangKamiDocRef);
  
      console.log("Tentang kami berhasil dihapus");
    } catch (error) {
      console.error("Error menghapus tentang kami:", error);
      throw error;
    }
  }
  