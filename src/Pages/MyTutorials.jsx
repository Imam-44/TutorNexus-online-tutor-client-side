import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { FaTrash, FaEdit } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Components/Loading';

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);

  // API call with token inside useEffect
useEffect(() => {
  const fetchData = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const token = await user.getIdToken();  // Fresh টোকেন নিলাম
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-tutorials/${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTutorials(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [user]);


  // Delete ফাংশন, এখানে ও token পাঠানো হবে
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/tutorial/${id}`, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });
          setTutorials(prev => prev.filter(t => t._id !== id));
          Swal.fire('Deleted!', 'Your tutorial has been deleted.', 'success');
        } catch (err) {
          toast.error('Failed to delete.');
          console.error(err);
        }
      }
    });
  };

  // Update ফাংশনও একইভাবে token পাঠাবে
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value,
    };

    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/tutorial/${editData._id}`, updated, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.data.modifiedCount > 0 || res.data.success) {
        toast.success('Update successful!');
        setTutorials(prev => prev.map(t => t._id === editData._id ? { ...t, ...updated } : t));
      } else {
        toast.info('No changes made.');
      }
      setEditData(null);
    } catch (err) {
      toast.error('Failed to update.');
      console.error(err);
    }
  };

  if (loading) return <Loading/>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-fuchsia-700 mb-6">My Tutorials</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-fuchsia-300">
          <thead className="bg-fuchsia-100">
            <tr>
              <th className="border border-fuchsia-300 px-4 py-2">Image</th>
              <th className="border border-fuchsia-300 px-4 py-2">Language</th>
              <th className="border border-fuchsia-300 px-4 py-2">Price</th>
              <th className="border border-fuchsia-300 px-4 py-2">Description</th>
              <th className="border border-fuchsia-300 px-4 py-2">Review</th>
              <th className="border border-fuchsia-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map(t => (
              <tr key={t._id} className="border-t border-fuchsia-200">
                <td className="border border-fuchsia-300 px-4 py-2">
                  <img src={t.image} alt="tutor" className="w-16 h-16 rounded-md object-cover" />
                </td>
                <td className="border border-fuchsia-300 px-4 py-2">{t.language}</td>
                <td className="border border-fuchsia-300 px-4 py-2">{t.price}</td>
                <td className="border border-fuchsia-300 px-4 py-2 whitespace-pre-wrap break-words max-w-xs">
                  {t.description}
                </td>
                <td className="border border-fuchsia-300 px-4 py-2">{t.review || 0}</td>
                <td className="border border-fuchsia-300 px-4 py-2 space-x-2">
                  <button
                    onClick={() => setEditData(t)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl mb-4 font-semibold text-fuchsia-700">Update Tutorial</h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <input name="name" value={editData.userName} readOnly className="input input-bordered w-full" />
              <input name="email" value={editData.email} readOnly className="input input-bordered w-full" />
              <input name="image" defaultValue={editData.image} className="input input-bordered w-full" required />
              <input name="language" defaultValue={editData.language} className="input input-bordered w-full" required />
              <input name="price" defaultValue={editData.price} type="number" className="input input-bordered w-full" required />
              <textarea name="description" defaultValue={editData.description} className="textarea textarea-bordered w-full" required />
              <input name="review" value={editData.review} readOnly className="input input-bordered w-full bg-gray-100" />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setEditData(null)} className="btn btn-outline">Cancel</button>
                <button type="submit" className="btn bg-fuchsia-500 text-white hover:bg-fuchsia-600">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;
