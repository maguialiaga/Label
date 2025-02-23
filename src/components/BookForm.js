import React, { useRef, useState } from "react";
import {
  Container,
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
} from "../components/BookFormStyles";
import validateBookForm from "./Validate";
import emailjs from "@emailjs/browser";

const BookForm = () => {
  const [option, setOption] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [offer, setOffer] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventValue = Number(event);
    const offerValue = Number(offer);

    const resultError = validateBookForm({
      email,
      option,
      event: eventValue,
      city,
      date,
      offer: offerValue,
    });

    if (resultError !== null) {
      setError(resultError);
      setSuccess(null);
      return;
    }
    emailjs
      .sendForm(
        "service_9gh7bxj",
        "template_bs5w4l9",
        form.current,
        "YbtvmtgF_Gk_6vpk3"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setOption("Choose");
    setEmail("");
    setEvent("");
    setCity("");
    setDate("");
    setOffer("");
    setMessage("");
    setError(null);
    setSuccess("Email was sent!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Contact*",
      label2: "Enter email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
      name: "user_email",
    },
    {
      label: "Event Capacity*",
      label2: "Enter event capacity",
      value: event,
      onChange: (e) => setEvent(Number(e.target.value) || ""),
      type: "number",
      name: "user_event",
    },
    {
      label: "City/Country*",
      label2: "Enter city/country",
      value: city,
      onChange: (e) => setCity(e.target.value),
      type: "text",
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
      label: "Offer",
      label2: "In EUR €",
      value: offer,
      onChange: (e) => setOffer(Number(e.target.value) || ""),
      type: "number",
      name: "user_offer",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Booking Request</FormTitle>
            <FormWrapper ref={form} onSubmit={handleSubmit}>
              <FormInputRow key={3}>
                <FormSelect
                  name="user_option"
                  onChange={(e) => setOption(e.target.value)}
                  value={option}
                >
                  <option value="Choose">Choose an Artist*</option>
                  <option value="Abuk">Abuk</option>
                  <option value="Agustin Giri">Agustin Giri</option>
                  <option value="Amadori">Amadori</option>
                  <option value="Djolee">Djolee</option>
                  <option value="Gespona">Gespona</option>
                  <option value="Last Men On Earth">Last Men On Earth</option>
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
    </FormSection>
  );
};

export default BookForm;
