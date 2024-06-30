import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostServices from '../../components/PostServices';

const AddInfo = () => {


        const handleSubmit = async (event) => {
            event.preventDefault();

            const title = event.target.title.value;
            const date = event.target.date.value;
            const image = event.target.image.files[0]

            const formdata = new FormData();

            formdata.append('title',title);
            formdata.append('date',date);
            formdata.append('image',image);

           const response = await PostServices.create(formdata);
           console.log(response)

           event.target.reset();

        }

    return (
        <div className='container'>
            <ToastContainer />
            <div className='row'>
                <div className='col-lg-6 mx-auto'>
                    <div className='card p-4 rounded-0 border-0'>
                        <div className='py-4 d-flex justify-content-between'>
                            <h2 className="text-secondary">Information Add</h2>
                            <div>
                                <Link to="/admin/category" className='btn btn-primary'> Manage Information</Link>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} enctype="multipart/form-data">
                            <div className='row gy-3'>
                                <div className='col-lg-12'>
                                    <Form.Group>
                                        <lebel className="mb-2">Title</lebel>
                                        <Form.Control type="text" name='title' placeholder="Title" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <lebel className="mb-2">Date</lebel>
                                        <Form.Control type="date" name='date' placeholder="date" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <lebel className="mb-2">Image</lebel>
                                        <Form.Control type="file" name='image' placeholder="Image" required />
                                    </Form.Group>
                                </div>
                            </div>
                            <Button variant="primary mt-4" type="submit">
                                Update
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInfo;