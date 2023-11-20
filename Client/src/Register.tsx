
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import axios from "axios"
import Cookies from 'universal-cookie';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}
export const Register = () => {
  const { register, handleSubmit } = useForm()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const baseUrl = "http://localhost:8080/authentication/login"
  const onSubmit = (data) => {
    setEmail(data.email)
    setPassword(data.password)
    setName(data.name)
  }
  const requestData: RegisterRequest = {
    email: email, // emailはフォームから受け取った値
    password: password, // passwordはフォームから受け取った値
    name: name,
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
    cookies.set('jwtToken', receivedJwt, { path: '/' });
  });

  return (
    <>
      <div>
        <h3>新規登録</h3>
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
            <label>Name:
              <input placeholder="Name" {...register("name")} />
            </label>
          </div>
          <div>
            <input type="submit" value="登録" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;