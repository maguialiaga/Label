import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  /* width: 100%; */
  max-width: 100%;
  /* max-width: 1300px; */
  margin-right: auto;
  margin-left: auto;
  padding: 50px 200px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 960px) {
    padding: 30px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(1rem, 1vw, 1rem);
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  color: #626881;
  width: 100%;
  letter-spacing: 3px;
  text-align: left;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const FormSection = styled.div`
  /* padding: 160px 0; */
  min-width: 100px;
  /* padding: 10px 0px; */
  background: white;
  font-family: "Montserrat", sans-serif;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const FormTitle = styled.h1`
  align-items: center;
  margin-bottom: 20px;
  /* margin-left: 6rem; */
  text-align: center;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  z-index: 1000; /* or any higher value */
`;

export const FormContainer = styled.div`
  display: flex;
`;
export const FormColumn = styled.div`
  background: white;
  border: 20px;
  padding: ${({ small }) => (small ? "100px  100px" : "20px 15px")};
  flex: 1;
  width: 100%; /* Adjusted width for better visibility */
  max-width: 700px; /* Added max-width to avoid excessive width */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  overflow-y: auto; /* Allow vertical scrolling if content overflows */
  max-height: 100vh; /* Added max-height to ensure it doesn't exceed the viewport height */
  @media screen and (max-width: 768px) {
    max-width: 90%;
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
  /* margin: 0 -15px -15px -15px; */
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
  height: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;
export const TextArea = styled.textarea`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 50px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
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

// export const Row = styled.div`
//   display: flex;
// `;

export const MobileIcon = styled.div`
  color: "black";
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  z-index: 1;
`;
