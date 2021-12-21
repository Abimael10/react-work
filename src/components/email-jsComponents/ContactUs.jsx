import React from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "my_template", e.target, "user_aAH9haQYhX4skSCWplJ1s");
    e.target.reset();
  };

  return (
    <div className="container mx-auto px-10 pt-16">
      <form className="w-full max-w-lg" onSubmit={sendEmail}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Full name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Example: Joe Smith" name="name" />
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" name="email" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Message
            </label>
            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message"></textarea>
          </div>
        </div>
        <ReCAPTCHA
            sitekey="6LdlKbsdAAAAAAQ1X9ltc6dmlfZtF4pHaikWlpjB"
        />
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <input type="submit" value="Send" class="shadow mt-2 bg-gray-700 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"/>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;