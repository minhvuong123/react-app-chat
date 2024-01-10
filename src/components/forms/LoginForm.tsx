import { Link } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" type="text" {...register('email', { required: "Email is required" })} />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="text" {...register('password', { required: "Password is required" })} />
      </InputContainer>
      <Button>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an account? </span>
        <Link to='/register'>
          <span>Sign up</span>
        </Link>
      </div>
    </form>
  );
};
