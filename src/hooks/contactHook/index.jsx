import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Message } from '../../components/Message';
import * as yup from 'yup';
import { useState, useEffect } from 'react';

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, 'Your name should be at least 3 characters.')
      .max(40, 'Your first name cannot be longer than 10 characters.')
      .required('Please enter your first name'),
    phone: yup
      .string()
      .matches(
        /^(\+47|47)?\d{8}$/, // Matches Norwegian mobile numbers with or without the country code
        'Please enter a valid Norwegian mobile number with or without (+47) 1234 5678'
      )
      .required('Please enter your phone number'),
    subject: yup.string().required('Please choose a subject'),
    description: yup
      .string()
      .min(3, 'Description must be at least 3 characters')
      .max(500, 'Description cannot be longer than 500 characters')
      .required(),
  })
  .required();

/**
 * Renders a contact form component.
 *
 * @returns {JSX.Element} The rendered contact form component.
 */
export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * Handles the form submission event.
   *
   * @param {Object} data - The form data submitted by the user.
   * @returns {void}
   */
  function onSubmit() {
    // Handle form submission here

    // Assuming form submission is successful
    setShowForm(false); // Hide the form immediately
    setTimeout(() => setFormSubmitted(true), 200); // Show the success message after a delay of 500 milliseconds
  }

  /**
   * Resets the formSubmitted state and shows the form when the component unmounts.
   */
  useEffect(() => {
    return () => {
      setFormSubmitted(false);
      setShowForm(true);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact">
      {formSubmitted ? (
        <div className="fade-in">
          <Message
            type="success"
            text="Form was submitted, you will be contacted within 24 hours."
          />
        </div>
      ) : (
        <div
          className={`flex flex-col w-full tablet:w-96 p-8 bg-slate-100 border border-slate-400 rounded-2xl ${
            showForm ? 'fade-in' : 'hidden'
          }`}
        >
          {/* Name field */}
          <div className="flex flex-col py-2">
            <div>
              <label>First name</label>
            </div>
            <div className="py-1">
              <input
                className=""
                placeholder="Enter your name..."
                {...register('name')}
              />
              <p
                className={
                  errors.name
                    ? 'p-1 m-2 bg-red-300 border border-red-500 text-red-950'
                    : 'hidden'
                }
              >
                {errors.name?.message}
              </p>
            </div>
          </div>

          {/* Phone number field */}
          <div className="flex flex-col py-2">
            <div>
              <label>Phone number</label>
            </div>
            <div>
              <input
                {...register('phone')}
                className=""
                placeholder="Enter your number..."
              />
              <p
                className={
                  errors.phone
                    ? 'p-1 m-2 bg-red-300 border border-red-500 text-red-950'
                    : 'hidden'
                }
              >
                {errors.phone?.message}
              </p>
            </div>
          </div>

          {/* Subject field */}
          <div className="flex flex-col py-2">
            <div>
              <label>Choose a subject:</label>
            </div>
            <div>
              <select
                id="subject"
                name="subject"
                {...register('subject')}
                className=""
              >
                <option value="general">General</option>
                <option value="compliment">Compliment</option>
                <option value="complaint">Complaint</option>
                <option value="enquiry">Enquiry</option>
              </select>
              <p
                className={
                  errors.subject
                    ? 'p-1 m-2 bg-red-300 border border-red-500 text-red-950'
                    : 'hidden'
                }
              >
                {errors.subject?.message}
              </p>
            </div>
          </div>

          {/* Description field */}
          <div className="flex flex-col py-2">
            <div>
              <label>Description</label>
            </div>
            <div>
              <textarea
                {...register('description')}
                className=""
                placeholder="Describe your problem here..."
              ></textarea>
              <p
                className={
                  errors.description
                    ? 'p-1 m-2 bg-red-300 border border-red-500 text-red-950'
                    : 'hidden'
                }
              >
                {errors.description?.message}
              </p>
            </div>
          </div>

          {/* Submit button */}
          <div>
            <div className="py-4">
              <button type="submit" className="button_style primary">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
