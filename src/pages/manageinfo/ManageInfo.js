/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageInfo = () => {

  const [info, setInfo] = useState([]);

  const getInfo = async () => {

    try {
      const response = await axios.get('http://localhost:8000/api/get-posts', {
        // headers: {
        //     Authorization: 'Bearer' + ' ' + token,
        // },
      });

      setInfo(response?.data?.data)

    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    getInfo()
  }, [])


  const deleteInfo = async (id) => {
    console.log(id)
    try {
      const response = await axios.get(`http://localhost:8000/api/delete-post/${id}`, {
        // headers: {
        //     Authorization: 'Bearer' + ' ' + token,
        // },
      });

      if(response.data.success){
        const newData = info.filter(item => item._id !== id)
        setInfo(newData)
      }

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-end'>
        <a href='/add-info' className='btn btn-primary my-3'> + Add New Info</a>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            info.map(item => {
              return (
                <tr key={item._id}>
                  <td>
                    <img className="img-fluid" src={`http://localhost:8000/api/postimage/${item.image}`} style={{ height: '100px' }} />
                  </td>
                  <th>{item._id}</th>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className='d-flex gap-3'>
                      <a href={`/update-info/${item._id}`} className='btn btn-primary'>Update</a>
                      <button className='btn btn-danger' onClick={()=>deleteInfo(item._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })
          }


        </tbody>
      </table>

    </div>
  );
};

export default ManageInfo;