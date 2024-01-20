import React from 'react';

const Contact = () => {
  const submitForm = import.meta.env.VITE_SUBMIT_FORM;

  return (
    <div name='contact' className="flex min-h-screen items-center justify-start px-2">
      <div className="mx-auto w-full max-w-[600px] regular-text">
        <h1 className="text-4xl font-medium">Let's Engage</h1>
        <p className="mt-3">Email me at davmwa90@gmail.com or message me here:</p>
        <form method="POST" action={submitForm} className="mt-10 px-2">
          <div className="dark:text-[var(--primary1)]">
            <div className='grid md:grid-cols-2 gap-6'>
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your name*
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="email"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your email*
                </label>
              </div>
            </div>
            <div className="relative z-0 mt-2">
            <input
                type="tel"
                name="phone"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                onKeyDown={(e) => {
                // Allow only numeric input and limit to 10 digits
                if (!/^\d+$/.test(e.key) && e.key !== 'Backspace') {
                    e.preventDefault();
                }

                // Limit the length to 10 digits
                const currentValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                if (currentValue.length >= 10 && e.key !== 'Backspace') {
                    e.preventDefault();
                }
                }}
                maxLength="10" // Set maximum length to 10
                required
            />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your Phone*
              </label>
            </div>
            <div className="relative z-0 col-span-2 mt-2">
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your message*
              </label>
            </div>
          </div>
          <button type="submit" className="mt-5 rounded-md btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
