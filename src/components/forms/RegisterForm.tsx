import { Link } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUserParams } from "../../utils/types";
import { postRegisterUser } from "../../utils/api";

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserParams>();

  const onSubmit: SubmitHandler<CreateUserParams> = async (data: CreateUserParams) => {
    console.log(data);
    try {
      await postRegisterUser(data)
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
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField id="firstName" type="text" {...register('firstName', { required: "First Name is required" })} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField id="lastName" type="text" {...register('lastName', { required: "Last Name is required" })} />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="text" {...register('password', { required: "Password is required" })} />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to='/login'>
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};
