'use client'

import React, { useEffect, useState } from "react";

export default function TableUlasan() {
  const [ulasanData, setUlasanData] = useState([]);
  const [newUlasan, setNewUlasan] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/ulasan/read');
        setUlasanData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(ulasanData);


  return (
    <div>
    <h1>Gallery Table</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Class Name</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {galleryData.map((item) => (
          <tr key={item.idGallery}>
            <td>{item.idGallery}</td>
            <td>{item.class_name}</td>
            <td>
              <img src={item.img} alt={item.class_name} style={{ width: '50px', height: '50px' }} />
            </td>
            <td>
              <button onClick={() => handleEdit(item.idGallery)}>Edit</button>
              <button onClick={() => handleDelete(item.idGallery)}>Delete</button>
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>

    <h2>Add New Gallery</h2>
    {/* <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          Class Name:
          <input type="text" name="class_name" value={newGallery.class_name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input type="text" name="img" value={newGallery.img} onChange={handleChange} />
        </label>
      </div>
      <button type="button" onClick={handleAddGallery}>Add Gallery</button>
    </form> */}
  </div>
  );
}
