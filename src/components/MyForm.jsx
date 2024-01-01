import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {collection,addDoc,getDocs} from "firebase/firestore";
import './style/MyForm.css';
const MyForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  useEffect(() => {
    // Fetch user data when the component mounts
    fetchData();
  }, []); // Add an empty dependency array
  

  const fetchData = async () => {
    try {
      const usersCollection = collection(db, "user");
      const usersSnapshot = await getDocs(usersCollection);
      const userData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFormData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitFormData(formData);
      console.log("Form data submitted successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      fetchData();

      // You can add further logic or redirect the user after submission.
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  const submitFormData = async (formData) => {
    try {
      const usersCollection = collection(db, "message");
      await addDoc(usersCollection, formData);
      console.log("Form data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error.message);
      throw error; // Rethrow the error to propagate it to the calling function
    }
  };
  


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your email   "
          />
        </label>{" "}
        <br />
        <label>
  Message:
  <textarea
    name="message"  // Change the name attribute to "message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Enter your message"
  />
</label>

        <br />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default MyForm;
