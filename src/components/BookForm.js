import React, { useRef, useState } from "react";
import {
  ModalBackground,
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  FormSelect,
  TextArea,
  Container,
  Heading,
  MobileIcon,
} from "../components/BookFormStyles";
import { FiX } from "react-icons/fi";
import validateBookForm from "./Validate";
import emailjs from "@emailjs/browser";

const BookForm = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [offer, setOffer] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateBookForm({
      email,
      option,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    emailjs
      .sendForm(
        // "service_jrm9xqc",
        "service_3h13353",
        "template_6e5i939",
        form.current,
        "vRc98fB-F8s0iNWTT"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmail("");
    setEvent("");
    setCity("");
    setDate("");
    setOffer("");
    setMessage("");
    setOption("");
    setError(null);
    setSuccess("Email was sent!");
    setShowModal(false);
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Contact*",
      label2: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
      name: "user_email",
    },
    {
      label: "Event Capacity*",
      label2: "Enter your event capacity",
      value: event,
      onChange: (e) => setEvent(e.target.value),
      type: "number",
      name: "user_event",
    },
    {
      label: "City,Country*",
      label2: "Enter the name of the city, country",
      value: city,
      onChange: (e) => setCity(e.target.value),
      type: "country",
      name: "user_city",
    },
    {
      label: "Date*",
      label2: "Enter date of the rave",
      value: date,
      onChange: (e) => setDate(e.target.value),
      type: "date",
      name: "user_date",
    },
    {
      label: "Offer*",
      label2: "In EUR€",
      value: offer,
      onChange: (e) => setOffer(e.target.value),
      type: "offer",
      name: "user_offer",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Booking Request</FormTitle>
            <MobileIcon onClick={closeModal}>
              <FiX style={{ color: "black" }} />
            </MobileIcon>
            <FormWrapper ref={form} onSubmit={handleSubmit}>
              <FormInputRow key={3}>
                <FormSelect
                  type={"select"}
                  name={"user_option"}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value={"Choose"}>Choose an Artist*</option>
                  <option value={"Abuk"}>Abuk</option>
                  <option value={"AgustinGiri"}>Agustin Giri</option>
                  <option value={"Amadori"}>Amadori</option>
                  <option value={"Djolee"}>Djolee</option>
                  <option value={"Gespona"}>Gespona</option>
                </FormSelect>
              </FormInputRow>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={el.label2}
                    value={el.value}
                    onChange={el.onChange}
                    name={el.name}
                    autoComplete="off"
                  />
                </FormInputRow>
              ))}

              <FormInputRow key={5}>
                <FormLabel>Message</FormLabel>
                <TextArea
                  type={"message"}
                  placeholder={"Enter your message"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name={"message"}
                  autoComplete="off"
                />
              </FormInputRow>
              <FormButton type="submit">Send Request</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
      <Heading />
    </FormSection>
  );
};

export default BookForm;
