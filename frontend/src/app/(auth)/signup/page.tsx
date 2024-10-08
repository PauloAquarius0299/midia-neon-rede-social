import SignupForm from '@/components/auth/signup-form'
import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <section className="flex min-h-screen w-full">
    {/* Lado esquerdo */}
    <main className="hidden lg:flex items-center justify-center bg-blue-900 w-1/2 px-12">
    <div className="relative w-full h-full">
        <Image
          src="/banner02.png"
          alt="banner1"
          fill 
          className="object-cover" 
        />
        </div>
    </main>

    {/* Conteúdo de login */}
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <Logo size={150} />
        <h1 className="mt-10 text-2xl font-semibold">
          Crie a sua conta
        </h1>
        <div className="mt-10 mb-14 flex flex-col gap-6">
          <SignupForm />
        </div>
        <div className='flex flex-col justify-center items-center gap-1 md:flex-row'>
          <div className='text-gray-500'>Já tem uma conta?</div>
          <Link href='/signin' className="hover:underline">Entrar no MidiaNeon</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup
