export default function validateBookForm({ email, option, event }) {
  if (!email) {
    return "Contact Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email address is invalid";
  }

  if (option === "Choose" || option === "") {
    return "Choose an Artist";
  }

  // if (!link) {
  //   return "Link is required";
  // }

  return null;
}
