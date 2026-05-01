import React, { useState } from "react";
import {
  PenSquareIcon,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
} from "lucide-react";
import EditProfile from "../components/EditProfile";
import Navbar from "../components/Navbar.jsx";

const ProfilePages = () => {
  const [showEdit, setShowEdit] = useState(false);

  // Mock user data - replace with actual API call
  const [userProfile] = useState({
    firstName: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+62 812-3456-7890",
    country: "Indonesia",
    gender: "Male",
    dateOfBirth: "1995-05-15",
    createdOn: "2024-01-10",
  });

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">
                    {userProfile.firstName} {userProfile.surname}
                  </h1>
                  <p className="text-indigo-100 text-lg mt-2">
                    {userProfile.gender} •{" "}
                    {calculateAge(userProfile.dateOfBirth)} years old
                  </p>
                </div>
              </div>
              {/* Edit Button */}
              <button
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => setShowEdit(true)}
                title="Edit Profile"
              >
                <PenSquareIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Personal Information */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-400" />
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">First Name</p>
                  <p className="text-white font-medium">
                    {userProfile.firstName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Last Name</p>
                  <p className="text-white font-medium">
                    {userProfile.surname}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Gender</p>
                  <p className="text-white font-medium">{userProfile.gender}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date of Birth</p>
                  <p className="text-white font-medium">
                    {formatDate(userProfile.dateOfBirth)}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium break-all">
                      {userProfile.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone Number</p>
                    <p className="text-white font-medium">
                      {userProfile.phoneNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location and Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                Location
              </h2>
              <div>
                <p className="text-gray-400 text-sm">Country</p>
                <p className="text-white font-medium text-lg">
                  {userProfile.country}
                </p>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                Account Info
              </h2>
              <div>
                <p className="text-gray-400 text-sm">Member Since</p>
                <p className="text-white font-medium">
                  {formatDate(userProfile.createdOn)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">Edit Profile 123</h3>
              <button
                onClick={() => setShowEdit(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <EditProfile onClose={() => setShowEdit(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePages;
