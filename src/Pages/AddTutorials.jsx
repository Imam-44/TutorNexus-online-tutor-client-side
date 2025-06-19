import React from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTutorials = () => {
  const { user } = React.useContext(AuthContext);

  const handleAddTutorials = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newtutorials = Object.fromEntries(formData.entries());
    newtutorials.email = user?.email;
    newtutorials.review = 0;
    newtutorials.book = [];

    axios
      .post(`${import.meta.env.VITE_API_URL}/add-tutorials`, newtutorials)
      .then((data) => {
        Swal.fire({
          title: "Your tutorial added successfully!",
          icon: "success",
          draggable: true,
        });
        form.reset();
      })
      .catch((err) => {
        console.log("Failed to add tutorial:", err.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf4ff] via-[#fae8ff] to-[#f0abfc] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-fuchsia-600">
          Add New Tutorial
        </h2>

        <form onSubmit={handleAddTutorials} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Your name"
                value={user?.displayName || ''}
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                readOnly
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">Email</label>
              <input
                type="email"
                name="email"
                value={user?.email || ''}
                placeholder="Your email"
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Tutorial Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border border-fuchsia-400 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">Language</label>
              <select
                name="language"
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a language
                </option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Arabic">Arabic</option>
                <option value="Japanese">Japanese</option>
                <option value="Portuguese">Portuguese</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">Price (USD)</label>
              <input
                type="number"
                name="price"
                placeholder="$99"
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                required
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Description</label>
            <textarea
              name="description"
              placeholder="Write tutorial description..."
              rows="4"
              className="w-full border border-fuchsia-400 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 rounded-md shadow-lg transition cursor-pointer"
            >
              Add Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
