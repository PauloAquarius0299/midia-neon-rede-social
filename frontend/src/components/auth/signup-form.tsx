'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";

const SignupForm = () => {

    const router = useRouter();
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    function handleEnterButton(){
        router.replace('/home')
    }

  return (
    <>
      <Input placeholder='Digite seu nome' 
      value={nameField}
      onChange={t => setNameField(t)}

      />
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
      label='Criar Conta'
      onClick={handleEnterButton}
      size={1}
      />
    </>
  )
}

export default SignupForm
