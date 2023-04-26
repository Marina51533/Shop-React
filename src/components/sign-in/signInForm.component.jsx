import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
import FormInput from "../form-input/formInput.component";
import "./signInForm.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      console.log( user );
      setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong password");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found");
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          required
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          required
          value={password}
        />
        <div className="buttons-container">
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
