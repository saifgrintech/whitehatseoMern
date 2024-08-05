import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";
import DashNav from "../../DashNav";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SmallCard from "../SmallCard";
import FootDash from "../../FootDash";

const BASE_URL = process.env.REACT_APP_URL;

const AddBlog = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("heading", heading);
      formData.append("description", description);

      const response = await axios.post( `${BASE_URL}/blog`,formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Blog created successfully!");
      setErrorMessage(""); // Clear any previous error message

      // Reset form fields after successful submission
      setImage("");
      setImagePreview("");
      setHeading("");
      setDescription("");
      e.target.reset(); // Reset form fields

      // Hide success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      setErrorMessage("Error creating blog. Please try again.");
      setSuccessMessage(""); // Clear any previous success message

      // Hide error message after 2 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <>
      <div className="main_wrapper">
        <Sidebar />

        <div className="main_content">
          <DashNav />
          <div className="container mt-3 pb-5 mb-5">
            <div className=" py-3 ">
              <div className="container d-flex justify-content-between">
                <h4 className="mb-0">Create Blog</h4>
                <Link to="/blog-list" className="btn btn-warning btn-sm">
                  All Blogs
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="col-md-8 px-2">
                    <div className="bg-white p-4">
                      <div className="mb-3">
                        <label htmlFor="heading" className="form-label">
                          Heading
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="heading"
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <ReactQuill
                          theme="snow"
                          value={description}
                          onChange={(content) => setDescription(content)}
                          modules={modules}
                          formats={formats}
                          id="description"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 px-2">
                  <SmallCard />
                    <div className="bg-white p-4">
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                          Image
                        </label>
                        <div>
                          {imagePreview && (
                            <div className="mb-3">
                              <img
                                src={imagePreview}
                                alt="Preview"
                                style={{
                                  height: "70px",
                                  width: "70px",
                                  objectFit: "cover",
                                }}
                                className="img-fluid"
                              />
                            </div>
                          )}
                        </div>
                        <input
                          className="form-control"
                          type="file"
                          id="image"
                          onChange={handleImageChange}
                          accept="image/*"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary rounded-0 mt-3"
                      >
                        Submit
                      </button>
                      {successMessage && (
                        <h6 className="text-success mt-3">
                          {successMessage}
                        </h6>
                      )}
                      {errorMessage && (
                        <h6 className="text-danger mt-3">
                          {errorMessage}
                        </h6>
                      )}
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

export default AddBlog;


