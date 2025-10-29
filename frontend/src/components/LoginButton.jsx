import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function LoginButton() {
  const navigate = useNavigate();

  function logIn() {
    navigate("/login");
  }

  return <Button variant={'link'} onClick={logIn}>Log In</Button>;
}

export default LoginButton;
