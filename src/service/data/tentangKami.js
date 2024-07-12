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
import { getDownloadURL, getStorage, ref } from "firebase/storage";

// Mendapatkan semua data tentang kami
export default async function getDataTentangKamiAll() {
  try {
    const tentangKamiCollectionRef = collection(db, "tentangkami");
    const tentangKamiSnapshot = await getDocs(tentangKamiCollectionRef);

    const tentangKamiData = [];
    tentangKamiSnapshot.forEach((doc) => {
      const data = doc.data();
      tentangKamiData.push({
        idTentangKami: doc.id,
        title: data.title,
        visi: data.visi,
        misi: data.misi,
        banner: data.banner,
      });
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
    const newTentangKamiRef = await addDoc(
      tentangKamiCollectionRef,
      dataTentangKami
    );

    return newTentangKamiRef.id;
  } catch (error) {
    console.error("Error menambahkan tentang kami:", error);
    throw error;
  }
}

// Mengubah data tentang kami berdasarkan ID
export async function ubahTentangKami(idTentangKami, dataTentangKami, banner) {
  try {
    let imageUrl = null;

    // Upload banner file jika ada
    if (banner) {
      console.log("Uploading banner file...");
      const storage = getStorage();
      const storageRef = ref(storage, `tentangkami/${banner.name}`);
      await uploadBytes(storageRef, banner);
      imageUrl = await getDownloadURL(storageRef);
      console.log("Banner uploaded. Image URL:", imageUrl);
    }

    // Update dataTentangKami dengan imageUrl jika ada
    if (imageUrl) {
      dataTentangKami.banner = imageUrl;
    }

    console.log("Final dataTentangKami:", dataTentangKami);

    // Referensi dokumen yang akan diperbarui
    const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);

    // Lakukan update dokumen di Firestore
    await updateDoc(tentangKamiDocRef, dataTentangKami);

    console.log("Document successfully updated in Firestore:", dataTentangKami);
    return dataTentangKami;
  } catch (error) {
    console.error("Error updating document in Firestore:", error);
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
