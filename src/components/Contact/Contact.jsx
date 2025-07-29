import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ data }) => {
  const { contactInfo, contactForm } = data;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const formRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_1txwhx6", // service ID
        "template_20cr977", // template ID
        formRef.current,
        "ZxQ5m4TzSHvbo9_Q_" // EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setFormData({
            name: "",
            email: "",
            title: "",
            message: "",
          });
          alert("Message sent successfully!");
          setLoading(false);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      data-scroll-index={5}
      className="section contact-section"
    >
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <SectionHeading title="Reach out me" subTitle="Contact" />
            <div className="contact-info">
              <ul>
                {contactInfo.map((element, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    <div className="icon">
                      <Icon icon={`bi:${element.icon}`} />
                    </div>
                    <div className="text">
                      <label>{element.title}</label>
                      <p>
                        {element.text}
                        <span>
                          {element.emailLink && (
                            <a
                              className="text-reset"
                              href={`mailto:${element.emailLink}`}
                            >
                              {element.emailLink}
                            </a>
                          )}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className="google-map"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75171.49957944296!2d79.81500582823428!3d6.921922084887003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e1!3m2!1sen!2slk!4v1753717742369!5m2!1sen!2slk"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 ps-xl-5">
            <div
              className="contact-form bg-g"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <div className="contact-head">
                <h4>{contactForm.title}</h4>
                <p>{contactForm.text}</p>
              </div>
              <form ref={formRef} onSubmit={onSubmit}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="title"
                        id="title"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.title}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows={6}
                        className="form-control"
                        onChange={handleInputChange}
                        value={formData.message}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button className="px-btn dark w-100" type="submit">
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
};

export default Contact;
