import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { toast } from "react-toastify";
import styled from "styled-components";
import { PageHero } from "../components";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_FORM_TEMPLATE_ID,
    REACT_APP_API_KEY,
  } = process.env;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !formState.name ||
      !formState.email ||
      !formState.subject ||
      !formState.message
    ) {
      setTimeout(() => {
        toast.info("Please fill out all fields", {
          toastId: "custom-id-yes",
        });
      }, 750);
    } else {
      emailjs.sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_FORM_TEMPLATE_ID}`,
        form.current,
        `${REACT_APP_API_KEY}`
      );
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        toast.success("Email sent", {
          toastId: "custom-id-yes",
        });
      }, 750);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  };

  return (
    <main>
      <PageHero title="contact us" />
      <Wrapper className="page section section-center">
        <article>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label htmlFor="name">
                Name
                <span>
                  <FaUserAlt />
                </span>
              </label>
              <input
                type="text"
                name="name"
                className="name-input"
                placeholder="Your name..."
                value={formState.name}
                onChange={handleChange}
                maxLength="30"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">
                Email
                <span>
                  <FaEnvelope />
                </span>
              </label>
              <input
                type="email"
                name="email"
                className="email-input"
                placeholder="Your email..."
                value={formState.email}
                onChange={handleChange}
                maxLength="30"
              />
            </div>
            <div className="form-control">
              <label htmlFor="subject">
                Subject
                <span>
                  <MdSubject />
                </span>
              </label>
              <input
                type="text"
                name="subject"
                className="subject-input"
                placeholder="Subject..."
                value={formState.subject}
                onChange={handleChange}
                maxLength="50"
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">
                Message
                <span>
                  <AiFillMessage />
                </span>
              </label>
              <textarea
                name="message"
                className="message-input"
                placeholder="Message..."
                value={formState.message}
                onChange={handleChange}
                rows="5"
                maxLength="500"></textarea>
            </div>
            <button
              type="submit"
              className="btn submit-btn"
              disabled={isLoading}>
              {isLoading ? <span className="sending"></span> : "Send"}
            </button>
          </form>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .form {
    margin-left: auto;
    margin-right: auto;
    background: #fafafa;
    max-width: 500px;
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }

  .form-control {
    margin-bottom: 1rem;
  }
  label {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: var(--clr-primary-1);
    font-size: 0.9rem;
    letter-spacing: var(--spacing);
    span {
      padding-top: 0.2rem;
      margin-right: 0.5rem;
      font-size: 1.2rem;
      color: var(--clr-primary-2);
    }
  }
  input {
    width: 100%;
    border-color: transparent;
    padding: 0.35rem 0.5rem;
    border-radius: var(--radius);
    font-size: 1.25rem;
    border: 2px solid #e6e6e6;
    &::placeholder {
      opacity: 0.2;
    }
  }
  textarea {
    width: 100%;
    max-width: 100%;
    border-color: transparent;
    padding: 0.35rem 0.75rem;
    border-radius: var(--radius);
    font-size: 1.1rem;
    border: 2px solid #e6e6e6;
    font-family: var(--ff-secondary);
    &::placeholder {
      opacity: 0.2;
    }
  }
  .submit-btn {
    width: 50%;
    font-size: 1rem;
    margin-top: 1rem;
    min-height: 2.5rem;
    display: block;
    margin: 0 auto;
    &:hover {
      background: var(--clr-primary-5);
    }
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  .sending {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: var(--primary-5);
    animation: spinner 0.6s linear infinite;
  }
`;
export default ContactPage;
