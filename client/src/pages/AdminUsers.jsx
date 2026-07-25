import { useEffect, useState } from "react";
import API from "../api/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Registered Users
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-pink-600 text-white">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Role</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{user.fullName}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 capitalize">{user.role}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}