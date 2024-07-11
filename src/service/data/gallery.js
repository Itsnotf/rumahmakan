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
        img: data.img 
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
      const galleryDocRef = doc(db, 'gallery', idGallery)
      const gallerySnapshot = await getDoc(galleryDocRef)
  
      if (gallerySnapshot.exists()) {
        return gallerySnapshot.data()
      } else {
        throw 'Data not found'
      }
    } catch (error) {
      console.error('Error fetching gallery data:', error)
      throw error
    }
}
  
  export async function tambahGallery(dataGallery) {
    try {
      const galleryCollectionRef = collection(db, 'gallery')
      const newGalleryRef = await addDoc(galleryCollectionRef, dataGallery)
  
      return newGalleryRef.id
    } catch (error) {
      console.error('Error menambahkan gallery:', error)
      throw error
    }
  }
  
  export async function ubahGallery(idGallery, dataGallery) {
    try {
      const galleryDocRef = doc(db, 'gallery', idGallery)
      await updateDoc(galleryDocRef, dataGallery)
  
      console.log('Gallery berhasil diubah')
    } catch (error) {
      console.error('Error mengubah gallery:', error)
      throw error
    }
  }
  
  export async function hapusGallery(idGallery) {
    try {
      const galleryDocRef = doc(db, 'gallery', idGallery)
      await deleteDoc(galleryDocRef)
  
      console.log('Gallery berhasil dihapus')
    } catch (error) {
      console.error('Error menghapus gallery:', error)
      throw error
    }
  }
