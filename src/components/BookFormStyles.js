import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const FormSection = styled.div`
  /* color: #fff; */
  padding: 80px 0;
  /* background: ${({ inverse }) => (inverse ? "#101522" : "#fff")}; */
  background: white;
  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 50px;
  margin-top: 40px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 40px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
`;
export const FormColumn = styled.div`
  /* margin-bottom: 15px; */
  padding: 50px;
  background: white;
  border: 20px;
  /* padding: ${({ small }) => (small ? "0 50px" : "0 15px")}; */
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
  }
  img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  /* max-width: 540px; */
  padding-top: 0;
  width: 100%;
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormInputRow = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;
  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;
export const TextArea = styled.textarea`
  font-family: "Montserrat", sans-serif;
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 150px;
  width: 100%;
  /* border: none;
  border-bottom: 1px solid #cfcfcf; */
  border: 1px solid #cfcfcf;
  font-size: 1rem;
`;

export const FormSelect = styled.select`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  /* color: black; */
  border: 1px solid #cfcfcf;
  /* border-bottom: 1px solid #cfcfcf; */
  font-size: 1rem;
`;

// export const Options = styled.option`
//   /* display: block;
//   padding-left: 10px;
//   outline: none;
//   border-radius: 2px;
//   height: 40px;
//   width: 100%;
//   border: 1px solid #cfcfcf;
//   font-size: 1rem; */
// `;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;
export const FormImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  color: black;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: black;
  }
`;
