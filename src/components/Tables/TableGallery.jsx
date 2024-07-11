"use client";

import { useState, useEffect } from "react";
import {
  getDataGalleryAll,
  tambahGallery,
  ubahGallery,
  hapusGallery,
} from "../../service/data/gallery";
import axios from "axios";

const TableGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [newGallery, setNewGallery] = useState({ class_name: "", img: "" });

  const [input, setInput] = useState({
    idGallery: "",
    class_name: "",
    img: "",
  });

  useEffect(() => {
    handleGetData()
  }, [])

  const handleDelete = async (packageItem) => {
    try {
      // console.log({ packageItem })

      if (!confirm("Apakah anda yakin mau menghapus data gallery ini?")) return;

      const response = await axios.delete(`/api/gallery/delete`, {
        headers: { "Content-Type": "application/json" },
        data: {
          idGallery: packageItem?.idGallery,
        },
      });

      galleryState.deleteData(packageItem?.idGallery);

      console.log("Data success deleted");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error?.message);
        console.log("Data failed delete");
      }
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post(`/api/gallery/create`, newGallery, {
        headers: { "Content-Type": "application/json" },
      });

      const addedGallery = response.data;
      setGalleryData([...galleryData, addedGallery]);
      setNewGallery({ class_name: "", img: "" });
      console.log("Data successfully added");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        console.log("Data failed to add");
      }
    }
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/gallery/read`);
      console.log(response.data); // Logging the response directly

      // Ensure response.data.data is an array
      if (Array.isArray(response.data.data)) {
        setGalleryData(response.data.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setError("Unexpected data format from API");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        setError(error.message); // Set error state
        console.log("Data failed to fetch");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGallery({ ...newGallery, [name]: value });
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Class Name</th>
            <th className="py-2">Image</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="class_name"
                value={newGallery.class_name}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Class Name"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="img"
                value={newGallery.img}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
                placeholder="Image URL"
              />
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={handleAdd}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </td>
          </tr>
          {Array.isArray(galleryData) && galleryData.map((galleryItem, key) => (
            <tr key={key}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  {galleryItem.class_name}
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{galleryItem.img}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGallery;
