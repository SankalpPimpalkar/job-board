import { useState } from "react";

export default function CreateApplicant() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applicant Sign-Up Form Submitted:", formData);
  };

  return (
    <div className="border border-dark-gray/20 p-5 rounded-md w-full max-w-lg">
      <h2 className="text-2xl font-bold text-dark-gray mb-4">Applicant Sign Up</h2>
      <p className="text-sm mb-4 text-dark-gray/80">
        Please fill in your details to create an applicant account.
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
            placeholder="Enter your name"
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
            placeholder="Enter your email"
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
            placeholder="Enter your phone number"
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
            placeholder="Enter your password"
            required
          />
        </div>
        <button
		 type="submit"
		 className="w-full font-medium bg-inidgo-light text-white py-2 rounded-md hover:bg-inidgo-light/90 transition-colors">
				 Sign Up
		</button>
      </form>
    </div>
  );
}
