"use client";

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useFormValidation } from "@/lib/hooks";
import LoadingSpinner from "./LoadingSpinner";

const validationRules = {
  name: (value) => {
    if (!value || value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return null;
  },
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  },
  subject: (value) => {
    if (!value || value.trim().length < 3) {
      return "Subject must be at least 3 characters";
    }
    return null;
  },
  message: (value) => {
    if (!value || value.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    return null;
  }
};

export default function ContactForm({ darkMode }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset
  } = useFormValidation(
    { name: "", email: "", subject: "", message: "" },
    validationRules
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate form submission (replace with actual API call)
      // For now, this creates a mailto link as a fallback
      const mailtoLink = `mailto:asibak@uoguelph.ca?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
      )}`;

      window.location.href = mailtoLink;

      setSubmitSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again or email directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={`rounded-xl p-8 text-center ${
        darkMode ? 'bg-green-900/30 border-2 border-green-700' : 'bg-green-50 border-2 border-green-300'
      }`}>
        <FaCheckCircle className="text-6xl text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-green-600">Message Sent!</h3>
        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
          Thank you for reaching out. I'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-xl p-8 shadow-lg border-2 ${
      darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-blue-200'
    }`}>
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Send Me a Message
      </h2>

      {submitError && (
        <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-300 text-red-700">
          {submitError}
        </div>
      )}

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className={`block mb-2 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } ${touched.name && errors.name ? 'border-red-500' : ''} focus:outline-none`}
            placeholder="Your full name"
            aria-invalid={touched.name && errors.name ? 'true' : 'false'}
            aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className={`block mb-2 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } ${touched.email && errors.email ? 'border-red-500' : ''} focus:outline-none`}
            placeholder="your.email@example.com"
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className={`block mb-2 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={values.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            onBlur={() => handleBlur('subject')}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } ${touched.subject && errors.subject ? 'border-red-500' : ''} focus:outline-none`}
            placeholder="What's this about?"
            aria-invalid={touched.subject && errors.subject ? 'true' : 'false'}
            aria-describedby={touched.subject && errors.subject ? 'subject-error' : undefined}
          />
          {touched.subject && errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className={`block mb-2 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            rows="6"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } ${touched.message && errors.message ? 'border-red-500' : ''} focus:outline-none`}
            placeholder="Tell me about your project or opportunity..."
            aria-invalid={touched.message && errors.message ? 'true' : 'false'}
            aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
          />
          {touched.message && errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size="sm" className="text-white" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FaPaperPlane />
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          * Required fields
        </p>
      </div>
    </form>
  );
}
