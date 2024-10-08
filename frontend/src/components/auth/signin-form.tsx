'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";

const SigninForm = () => {

    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    function handleEnterButton(){
        router.replace('/home')
    }

  return (
    <>
      <Input placeholder='Digite seu email' 
      value={emailField}
      onChange={t => setEmailField(t)}

      />


      <Input placeholder='Digite seu senha' 
      value={passwordField}
      onChange={t => setPasswordField(t)}
      password

      />

      <Button 
      label='Entrar'
      onClick={handleEnterButton}
      size={1}
      />
    </>
  )
}

export default SigninForm
