import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(10, 'Your first name cannot be longer than 10 characters.')
      .required('Please enter your first name'),
    phone: yup
      .number()
      .min(18, 'Your age must be 18 or higher')
      .max(100, 'Your age must be 100 or lower')
      .typeError('Your age must be a number'),
    subject: yup.string().required('Please choose a subject'),
    description: yup.string().min(3).max(10).required(),
  })
  .required();

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input
        {...register('firstName')}
        className={`${errors.firstName ? 'error' : ''} ${
          register('firstName') ? 'touched' : ''
        }`}
      />
      <p>{errors.firstName?.message}</p>

      <label>Phone number</label>
      <input {...register('phone')} className={errors.phone ? 'error' : ''} />
      <p>{errors.phone?.message}</p>

      <label>Choose a subject:</label>
      <select
        id="subject"
        name="subject"
        {...register('subject')}
        className={errors.subject ? 'error' : ''}
      >
        <option value="general">General</option>
        <option value="compliment">Compliment</option>
        <option value="complaint">Complaint</option>
        <option value="enquiry">Enquiry</option>
      </select>
      <p>{errors.subject?.message}</p>

      <label>Description</label>
      <textarea
        {...register('description')}
        className={`${errors.description ? 'error' : ''} ${
          register('description') ? 'touched' : ''
        }`}
      ></textarea>
      <p>{errors.description?.message}</p>

      <button type="submit" className="button_style primary">
        Send
      </button>
    </form>
  );
}
