import React from "react";
import { toast } from "react-toastify";

const EnrollForm = ({ course, onClose }) => {
  const handleSubmit = (e) => {
  e.preventDefault();

  onClose();

  toast.success(
    "🎉 Congratulations! Your enrollment request has been submitted successfully. We'll contact you soon!"
  );
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl text-gray-600"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Enrollment Form
        </h2>

        <p className="mb-4 text-gray-600">
          Course: {course?.title || course?.name || "Selected Course"}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg border p-3"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-lg border p-3"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit mobile number"
            className="rounded-lg border p-3"
            required
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;