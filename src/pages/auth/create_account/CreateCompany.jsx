import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { createAccountForCompany } from "../../../appwrite/functions";
import toast from "react-hot-toast"; // For success/error messages

export default function CreateCompany() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    number: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createAccountForCompany (formData);

      if (response.success) {
        toast.success("Company created successfully! Please log in.");
        navigate("/auth/login"); // Redirect to Login page
      } else {
        toast.error(response.message || "Failed to create company account.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error creating company:", error);
    }
  };

  return (
    <div className="border border-dark-gray/20 p-5 rounded-md w-full max-w-lg">
      <h2 className="text-2xl font-bold text-dark-gray mb-4">
        Sign Up Create Company
      </h2>
      <p className="text-sm mb-4 text-dark-gray/80">
        Fill in the details to register your company.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-dark-gray mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-gray mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
            placeholder="Enter company email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-gray mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
            placeholder="Enter company description"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-gray mb-1">Phone Number</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
            placeholder="Enter contact number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-gray mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
            placeholder="Enter company address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-gray mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-dark-gray/20 rounded-md outline-none"
            placeholder="Enter a secure password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full font-medium bg-inidgo-light text-white py-2 rounded-md hover:bg-inidgo-light/90 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
