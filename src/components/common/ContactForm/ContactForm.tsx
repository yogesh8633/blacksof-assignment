import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from '../Fields/InputField';

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { control, handleSubmit,reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert("Thank you!")
    reset();
  };

  return (
    <div className="bg-[#006abc] text-white p-6 md:p-12 lg:p-24 mt-20 rounded-lg max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 relative">
      <div className="md:w-1/2">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Get in touch</p>
        <hr className='w-1/6 border-t-2 border-white mb-5'/>
        <p className="mb-5 text-xl md:text-2xl font-semibold">For general enquiries</p>
        <div className="mb-5">
          <p className="text-lg md:text-2xl font-medium">Address</p>
          <p className='text-sm md:text-lg'>110, 16th Road, Chembur, Mumbai - 400071</p>
        </div>
        <div className="mb-5">
          <p className="text-lg md:text-2xl font-medium">Phone:</p>
          <p className='text-sm md:text-lg'>+91 22 25208822</p>
        </div>
        <div className="mb-5">
          <p className="text-lg md:text-2xl font-medium">Email:</p>
          <p className='text-sm md:text-lg'>info@supremegroup.co.in</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            control={control}
            name="name"
            type="text"
            label="Full name"
          />
          <InputField
            control={control}
            name="email"
            type="email"
            label="E-mail"
          />
          <InputField
            control={control}
            name="subject"
            type="text"
            label="Subject"
          />
          <InputField
            control={control}
            name="message"
            type="text"
            label="Message"
          />
          <button
            type="submit"
            className="border border-white bg-transparent text-white px-8 md:px-12 py-2 md:py-3 rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
