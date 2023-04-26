import { useState ,useContext} from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
import FormInput from "../form-input/formInput.component";
import './signUpForm.styles.scss'
import Button from "../button/button.component";

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
 
  const {setCurrentUser} = useContext(UserContext)
  console.log('HIT')

  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("your password dont match");
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user)
      await createUserDocumentFromAuth(user,{displayName})
    resetFormFields()
    } catch (error) {
        if (error.code === "auth/email-already-in-use")
          alert("Change your password");
        else {
          console.log("Error", error);
        }
    }
  };

  return (
    <div className="sign-up-container">
        <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />

       <FormInput
       label='Email'
          type="email"
          onChange={handleChange}
          name="email"
          required
          value={email}
       />
        <FormInput
        label='Password'
          type="password"
          onChange={handleChange}
          name="password"
          required
          value={password}
        />
        <FormInput
        label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          required
          value={confirmPassword}
        />
       <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
