export default function validateBookForm({
  option,
  email,
  event,
  city,
  date,
  offer,
}) {
  if (option === "Choose" || option === "") {
    return "Choose an Artist";
  }
  if (!email) {
    return "Contact Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email address is invalid";
  }

  // if (typeof event !== "number" || isNaN(event)) {
  //   return "Capacity must be a valid number";
  // }

  if (event == null || isNaN(Number(event)) || Number(event) <= 0) {
    return "Event must be a valid number";
  }

  if (!city || !/[a-zA-Z]+/.test(city)) {
    return "City must be fill";
  }

  if (!date || isNaN(Date.parse(date))) {
    return "Date must be a valid date";
  }

  // if (offer === undefined || offer === null || isNaN(offer) || offer <= 0) {
  //   return "Offer must be a valid number";
  // }

  return null;
}
