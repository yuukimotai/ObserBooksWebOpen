
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import axios from "axios"
import Cookies from 'universal-cookie';


const baseUrl = "http://localhost:8080/authentication/login"
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
interface LoginRequest {
  email: string;
  password: string;
}
export const Login = () => {
  const { register, handleSubmit } = useForm()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmit = (data) => {
    setEmail(data.email)
    setPassword(data.password)
  }
  const requestData: LoginRequest = {
    email: email, // emailはフォームから受け取った値
    password: password, // passwordはフォームから受け取った値
  };
  axios.post(baseUrl, requestData, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    console.log(response.data.jwt)
    var receivedJwt = response.data.jwt;
    // JWTをサーバーから受け取った後
    const cookies = new Cookies();
    cookies.set('obserbookstoken', receivedJwt, { path: '/' });
  });

  return (
    <>
      <div>
        <h3>ログイン</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email:
              <input placeholder="Email" {...register("email")} />
            </label>
          </div>
          <div>
            <label>Password:
              <input placeholder="Password" {...register("password")} />
            </label>
          </div>
          <div>
            <input type="submit" value="ログイン" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;