import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/Auth";
import { Container } from "./style";

interface UserData {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 dígitos"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    signIn(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email")}
          name="email"
          placeholder="Email"
        />
        {errors?.email && <span>{errors.email.message}</span>}
        <input
          type="text"
          {...register("password")}
          name="password"
          placeholder="Senha"
        />
        {errors?.password && <span>{errors.password.message}</span>}
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};
