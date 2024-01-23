import { Link, useNavigate } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserCredentialsParams } from "../../utils/types";
import { postLoginUser } from "../../utils/api";
import { useState } from "react";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserCredentialsParams>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserCredentialsParams> = async (data: UserCredentialsParams) => {
    console.log(data);
    try {
      await postLoginUser(data)
      navigate('/conversations')
    } catch (error) {
      console.log(error);
    }
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
