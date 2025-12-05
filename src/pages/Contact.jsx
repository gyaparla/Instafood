import { useState } from "react";
import { MdCheckCircle, MdError } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-8 px-4 md:py-12 bg-white dark:bg-gray-950">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            We'd love to hear from you. Send us your message and we'll respond
            as soon as possible.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 rounded-lg flex items-center gap-3">
            <MdCheckCircle className="text-green-600 dark:text-green-400 text-2xl" />
            <span className="text-green-800 dark:text-green-200 font-medium">
              Thank you! Your message has been sent successfully.
            </span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              autoComplete="off"
              className={`w-full px-4 py-2 md:py-3 border rounded-lg outline-none transition-colors dark:bg-gray-800 dark:text-white ${
                errors.name
                  ? "border-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20"
                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-orange-500 dark:focus:border-orange-500"
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <MdError className="text-base" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="off"
              className={`w-full px-4 py-2 md:py-3 border rounded-lg outline-none transition-colors dark:bg-gray-800 dark:text-white ${
                errors.email
                  ? "border-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20"
                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-orange-500 dark:focus:border-orange-500"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <MdError className="text-base" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share your message here..."
              autoComplete="off"
              rows="5"
              className={`w-full px-4 py-2 md:py-3 border rounded-lg outline-none transition-colors resize-none dark:bg-gray-800 dark:text-white ${
                errors.message
                  ? "border-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20"
                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-orange-500 dark:focus:border-orange-500"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <MdError className="text-base" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-6 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                Email
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                support@instafood.com
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                Phone
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
