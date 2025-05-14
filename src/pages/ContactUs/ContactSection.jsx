import { useState } from "react";
import InputField from "../../components/ui/InputField";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    url: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      url: "",
      option: "Haven't decide yet",
      message: "",
    });
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark-tertiary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative py-16 px-8 overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/img_abstractgeometricseamlesspatterns2zqt82c_2.png"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            {/* Content Section */}
            <div className="relative z-10">
              <h2 className="text-white font-montserrat font-bold text-4xl mb-8">
                Accelerate Your Business with Oz Media
              </h2>

              <p className="text-white font-roboto text-base leading-7 mb-8">
                At Oz Media, we specialize in delivering **impactful digital
                marketing** and **cutting-edge IT solutions** tailored to your
                business goals. Whether it’s boosting your online presence,
                managing social media, or optimizing your technology
                infrastructure — we ensure your brand stays ahead in a
                competitive digital world.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/img_group.svg"
                    alt="Check"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-white font-montserrat font-bold text-base">
                    Strategic Social Media Marketing to amplify your brand
                    visibility.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <img
                    src="/images/img_group.svg"
                    alt="Check"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-white font-montserrat font-bold text-base">
                    Result-driven Paid Ads & SEO for maximized ROI and growth
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <img
                    src="/images/img_group.svg"
                    alt="Check"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-white font-montserrat font-bold text-base">
                    End-to-end IT Solutions to streamline your business
                    operations.
                  </p>
                </div>
              </div>

              <h3 className="text-white font-montserrat font-bold text-2xl mb-6">
                Contact Us :
              </h3>

              <div className="space-y-4 text-[#fd4360]">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/img_systemuiconslocation.svg"
                    alt="Location"
                    className="w-5 h-5"
                  />
                  <p className="text-primary-red font-montserrat font-bold text-base">
                    Oz Media Planet, 2nd Floor , Property no. 7, PU-4 Scheme No.
                    54, Vijay Nagar, Indore, Madhya Pradesh 452010
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src="/images/img_fluentmail28regular.svg"
                    alt="Email"
                    className="w-5 h-5"
                  />
                  <p className="text-primary-red font-montserrat font-bold text-base">
                    info@ozmediaplanet.com
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src="/images/img_solarphonelinear.svg"
                    alt="Phone"
                    className="w-5 h-5"
                  />
                  <p className="text-primary-red font-montserrat font-bold text-base">
                    0731-4071492
                  </p>
                </div>
              </div>

              <div className="mt-8 flex space-x-4 justify-end">
                <a
                  href="https://facebook.com"
                  className=" w-[34px] h-[34px] flex items-center justify-center"
                >
                  <img
                    src="/images/img_vector_28x28.svg"
                    alt="Facebook"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  className=" w-[34px] h-[34px] flex items-center justify-center"
                >
                  <img
                    src="/images/img_vector_24x29.svg"
                    alt="Twitter"
                    className="w-6 h-7"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  className=" w-[34px] h-[34px] flex items-center justify-center"
                >
                  <img
                    src="/images/img_vector_19x28.svg"
                    alt="Instagram"
                    className="w-5 h-7"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#fd4360] font-montserrat font-bold text-xl mb-2">
              Contact
            </h2>
            <h3 className="text-white font-montserrat font-bold text-5xl mb-8">
              More about you
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    First Name
                  </label>
                  <InputField
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    Last Name
                  </label>
                  <InputField
                    type="text"
                    name="lastName"
                    placeholder="Last Name (Optional)"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    E-mail
                  </label>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    URL
                  </label>
                  <InputField
                    type="url"
                    name="url"
                    placeholder="Website URL (Optional)"
                    value={formData.url}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-roboto text-sm mb-2">
                  Please choose an option
                </label>
                <InputField
                  type="text"
                  placeholder="Haven't decide yet"
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="text-primary-red"
                />
              </div>

              <div>
                <label className="block text-white font-roboto text-sm mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="text-[#fd4360] border-2 border-[#fd4360] rounded-lg bg-transparent hover:bg-[#fd4360] hover:text-white font-bold py-3 px-8 w-full flex items-center justify-center transition-colors duration-300"
              >
                Send a Message
                <img
                  src="/images/img_plus.svg"
                  alt="Plus"
                  className="ml-2 w-2 h-2"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
