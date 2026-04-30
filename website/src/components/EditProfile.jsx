import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function EditProfile({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+62 812-3456-7890",
    country: "ID",
    gender: "male",
    dateOfBirth: "1995-05-15",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log("Form submitted:", formData);
      // Example API call structure:
      // const response = await fetch('/api/profile/update', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      setTimeout(() => {
        setLoading(false);
        alert("Profile updated successfully!");
        onClose?.();
      }, 1000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        {/* Personal Information Section */}
        <div className="border-b border-gray-700 pb-8 m-8">
          <h2 className="text-lg font-semibold text-white">
            Personal Information
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Update your personal details here.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-white"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-white"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-700 px-3 py-2 text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-white"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-700 px-3 py-2 text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-white"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-700 px-3 py-2 text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-white"
              >
                Gender
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-700 py-2 pr-8 pl-3 text-white outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="custom">Custom</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            {/* Country */}
            <div className="sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-white"
              >
                Country
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-700 py-2 pr-8 pl-3 text-white outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                >
                  <option value="ID">Indonesia</option>
                  <option value="US">United States</option>
                  <option value="MY">Malaysia</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Photo Section */}
        <div className="border-b border-gray-700 pb-8 m-8">
          <h2 className="text-lg font-semibold text-white">Profile Photo</h2>
          <p className="mt-1 text-sm text-gray-400">
            Upload a profile picture to personalize your account.
          </p>

          <div className="mt-8 flex items-center gap-x-4">
            <UserCircleIcon
              aria-hidden="true"
              className="size-16 text-gray-500"
            />
            <button
              type="button"
              className="rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-600 transition-colors"
            >
              Change Photo
            </button>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="mt-8 flex items-center justify-end gap-x-4 m-8">
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
