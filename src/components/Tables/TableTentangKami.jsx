"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const TentangKami = () => {
  const [tentangKamiData, setTentangKamiData] = useState([]);
  const [error, setError] = useState(null);
  const [formInput, setFormInput] = useState({
    idTentangKami: "",
    title: "",
    visi: "",
    misi: "",
    banner: null,
  });
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const response = await axios.get(`/api/tentangKami/read`);
      if (Array.isArray(response.data.data)) {
        setTentangKamiData(response.data.data);
      } else {
        setError("Unexpected data format from API");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateData = async (id, newData) => {
    try {
      console.log("Sending data to backend:", newData);
      const response = await axios.post('/api/tentangKami/update', newData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("Data successfully updated:", response.data);
      handleGetData();
      setEditingItemId(null);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "banner") {
      setFormInput((prevInput) => ({
        ...prevInput,
        [name]: files[0],
      }));
    } else {
      setFormInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
    const selectedItem = tentangKamiData.find(
      (item) => item.idTentangKami === id
    );

    setFormInput({
      idTentangKami: selectedItem.idTentangKami,
      title: selectedItem.title,
      visi: selectedItem.visi,
      misi: selectedItem.misi,
      banner: null,
    });
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setFormInput({
      idTentangKami: "",
      title: "",
      visi: "",
      misi: "",
      banner: null,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = formInput.idTentangKami;
    const newData = {
      idTentangKami: formInput.idTentangKami,
      data: {
        title: formInput.title,
        visi: formInput.visi,
        misi: formInput.misi,
      },
      banner: formInput.banner,
    };

    try {
      await handleUpdateData(id, newData);
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Tentang Kami</h1>
      {error && <p className="text-red-600">{error}</p>}
      <table className="min-w-full bg-white mb-4">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Visi</th>
            <th className="py-2">Misi</th>
            <th className="py-2">Banner</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tentangKamiData.map((item) => (
            <tr key={item.idTentangKami}>
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.visi}</td>
              <td className="border px-4 py-2">{item.misi}</td>
              <td className="border px-4 py-2">
                <img
                  src={item.banner}
                  alt={item.title}
                  className="max-w-full h-auto"
                />
              </td>
              <td className="border px-4 py-2">
                {editingItemId === item.idTentangKami ? (
                  <div className="flex">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleEdit(item.idTentangKami)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingItemId && (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="hidden"
            name="idTentangKami"
            value={formInput.idTentangKami}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="title"
            value={formInput.title}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 mr-2"
            placeholder="Title"
            required
          />
          <textarea
            name="visi"
            value={formInput.visi}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 mr-2"
            placeholder="Visi"
            required
          />
          <textarea
            name="misi"
            value={formInput.misi}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 mr-2"
            placeholder="Misi"
            required
          />
          <input
            type="file"
            name="banner"
            onChange={handleInputChange}
            className="border rounded px-2 py-1 mr-2"
          />
        </form>
      )}
    </div>
  );
};

export default TentangKami;
