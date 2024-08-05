import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import DashNav from '../../DashNav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import FootDash from '../../FootDash';

const BASE_URL = process.env.REACT_APP_URL;

const EditAbout = () => {
    const initialFormData = {
        image: '',
        title: '',
        description: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchWorkItem = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/aboutus/${id}`);
                console.log('Fetched data:', response.data); // Debug statement
                const { image, title, description } = response.data;
                setFormData({ image, title, description });
                setImagePreview(`/aboutUs/${image}`);
            } catch (error) {
                console.error('Error fetching about us:', error);
                setError('Failed to fetch data');
            }
        };

        fetchWorkItem();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleDescriptionChange = (content) => {
        setFormData({ ...formData, description: content });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
            const formDataWithFile = new FormData();
            formDataWithFile.append('image', formData.image);
            formDataWithFile.append('title', formData.title);
            formDataWithFile.append('description', formData.description);
    
            await axios.put(`${BASE_URL}/aboutus/${id}`, formDataWithFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccess(true);
             // Hide success message after 2 seconds
             setTimeout(() => {
                setSuccess("");
            }, 2000);

        } catch (error) {
            setError('Failed to update the about us data');
              // Hide error message after 2 seconds
              setTimeout(() => {
                setError("");
            }, 2000);
        } finally {
            setLoading(false);
        }
    
        
    
        // Or use e.target.reset() if you prefer, but ensure it resets all fields correctly
    };

    const modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    return (
        <>
            <div className="main_wrapper">
                <Sidebar />
                <div className="main_content">
                    <DashNav />
                    <div className="mt-3 pb-4 mb-5">
                        <div className="bg-light py-3 px-3">
                            <div className="container d-flex justify-content-between ">
                                <h4 className='mb-0'>Edit About</h4>
                                <Link to='/about-list' className="btn btn-warning btn-sm">All About Us</Link>
                            </div>
                        </div>
                        <div className="p-3 mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex'>
                                    <div className="col-md-8 px-2">
                                        <div className="bg-white p-4">
                                            <div className='mb-3'>
                                                <label htmlFor="title">Title:</label>
                                                <input 
                                                    className='form-control' 
                                                    type="text" 
                                                    id="title" 
                                                    name="title" 
                                                    value={formData.title} 
                                                    onChange={handleChange} 
                                                    required 
                                                />
                                            </div>

                                            <div className='mb-3'>
                                                <label htmlFor="description">Description:</label>
                                                <ReactQuill 
                                                    theme='snow'
                                                    value={formData.description}
                                                    onChange={handleDescriptionChange}
                                                    modules={modules}
                                                    formats={formats}
                                                    id="description"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-2">
                                    <div className="bg-white p-4 mb-4">
                                            <ul className='p-0' style={{fontSize:"13px"}}>
                                                <li className='mb-2'> <i className="fa-solid fa-signal"></i> Status : <b>Draft</b> <Link>Edit</Link></li>
                                                <li className='mb-2'> <i className="fa-solid fa-eye"></i> Visibility : <b>Public</b> <Link>Edit</Link></li>
                                                <li className='mb-2'> <i className="fa-solid fa-calendar"></i> Publish <b>Immediately</b> <Link>Edit</Link></li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-4 mb-4">
                                            <div className='mb-3'>
                                                <label htmlFor="image">Image:</label>
                                                {imagePreview && (
                                                    <div>
                                                        <img
                                                            src={imagePreview}
                                                            alt="Current Work"
                                                            style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }}
                                                        />
                                                    </div>
                                                )}
                                                <input 
                                                    className='form-control' 
                                                    type="file" 
                                                    id="image" 
                                                    name="image" 
                                                    onChange={handleChange} 
                                                    accept="image/*" 
                                                />
                                            </div>
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary rounded-0 mt-3" 
                                                disabled={loading}
                                            >
                                                {loading ? 'Updating...' : 'Update'}
                                            </button>

                                            {success && <h6 className="text-success mt-3">Data updated successfully!</h6>}
                                            {error && <h6 className="text-danger mt-3">{error}</h6>}
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>

                    <FootDash />
                </div>
            </div>
        </>
    );
};

export default EditAbout;
