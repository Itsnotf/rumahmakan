import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default async function getDataGalleryAll() {
  try {
    const galleryCollectionRef = collection(db, "gallery");
    const gallerySnapshot = await getDocs(galleryCollectionRef);

    const galleryData = [];
    gallerySnapshot.forEach((doc) => {
      const data = doc.data();
      galleryData.push({
        idGallery: doc.id,
        class_name: data.class_name,
        img: data.img,
      });
    });

    return galleryData;
  } catch (error) {
    console.error("Error fetching all gallery data:", error);
    throw error;
  }
}

export async function getDataGallery(idGallery) {
  try {
    const galleryDocRef = doc(db, "gallery", idGallery);
    const gallerySnapshot = await getDoc(galleryDocRef);

    if (gallerySnapshot.exists()) {
      return gallerySnapshot.data();
    } else {
      throw "Data not found";
    }
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    throw error;
  }
}

export async function tambahGallery(dataGallery) {
  try {
    const { img, ...otherData } = dataGallery;

    // Buat referensi storage
    const storageRef = ref(storage, `gallery/${img.name}`);

    // Unggah file gambar ke Firebase Storage
    const snapshot = await uploadBytes(storageRef, img);

    // Dapatkan URL download dari gambar yang diunggah
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Gabungkan URL download ke dataGallery
    const dataGalleryWithImgURL = { ...otherData, img: downloadURL };

    // Tambah dataGallery ke Firestore
    const docRef = await addDoc(
      collection(db, "gallery"),
      dataGalleryWithImgURL
    );

    return docRef.id; // Kembalikan ID dokumen baru
  } catch (error) {
    console.error("Error menambahkan gallery:", error);
    throw error;
  }
}

export async function ubahGallery(idGallery, dataGallery) {
  try {
    const galleryDocRef = doc(db, "gallery", idGallery);
    await updateDoc(galleryDocRef, dataGallery);

    console.log("Gallery berhasil diubah");
  } catch (error) {
    console.error("Error mengubah gallery:", error);
    throw error;
  }
}

export async function hapusGallery(idGallery) {
  try {
    const galleryDocRef = doc(db, "gallery", idGallery);
    await deleteDoc(galleryDocRef);

    console.log("Gallery berhasil dihapus");
  } catch (error) {
    console.error("Error menghapus gallery:", error);
    throw error;
  }
}
