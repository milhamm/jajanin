import { GetServerSideProps } from "next";
import Link from "next/link";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import React, { SyntheticEvent, useState } from "react";
import api from "../../client/api";
import { useRouter } from "next/dist/client/router";

type LoginPageProps = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      providers: await getProviders(),
    },
  };
};

const Register = ({ providers }: LoginPageProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await api.post("/authentication/register", {
        name: name,
        phone_number: phone,
        email: email,
        password: password,
      });
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error.response);
      if (error.response) {
        setError("Email is already taken");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='bg-zinc-900 h-screen text-white'>
      <div className='flex flex-col md:flex-row-reverse max-w-[1300px] mx-auto h-full px-4'>
        <section className='w-full md:w-1/3 flex justify-center md:justify-start md:items-center mt-0 md:mt-[5rem]'>
          <h1 className="font-['Mazzard'] text-[3rem] text-red-500 p-4 bg-zinc-900 md:-left-10 transform relative">
            Jajanin
          </h1>
        </section>
        <section className='w-full md:w-2/3 md:border-r flex justify-start'>
          <div className='w-full md:w-[400px] flex justify-center flex-col'>
            <h1 className='text-2xl font-bold'>Register In</h1>
            <p className='mb-5'>
              Have an account?{" "}
              <Link href='/auth/login'>
                <a className='text-red-500 hover:underline'>Login here</a>
              </Link>
            </p>
            {error ? (
              <div className='bg-red-500 p-2 mb-2 rounded'>
                <p>{error}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div>
                <label htmlFor='user_name'>Name</label>
                <input
                  placeholder='Eko Sugeng'
                  required
                  autoComplete='off'
                  type='text'
                  id='user_name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full px-3 py-1.5 rounded mt-2 focus:bg-transparent bg-zinc-700 border border-gray-600'
                />
              </div>
              <div>
                <label htmlFor='user_email'>Email</label>
                <input
                  required
                  placeholder='hello@jajanin.dev'
                  autoComplete='off'
                  type='email'
                  id='user_email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-3 py-1.5 rounded mt-2 focus:bg-transparent bg-zinc-700 border border-gray-600'
                />
              </div>
              <div>
                <label htmlFor='user_phone'>Phone</label>
                <input
                  required
                  placeholder='08239476xxx'
                  autoComplete='off'
                  type='phone'
                  id='user_phone'
                  name='phone_number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-full px-3 py-1.5 rounded mt-2 focus:bg-transparent bg-zinc-700 border border-gray-600'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='user_pass'>Password</label>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  id='user_pass'
                  name='password'
                  className='w-full px-3 py-1.5 rounded mt-2 focus:bg-transparent bg-zinc-700 border border-gray-600'
                />
              </div>

              <button
                type='submit'
                disabled={loading}
                className='w-full bg-red-500 py-1.5 rounded flex items-center justify-center'
              >
                {loading ? "Submitting . . ." : "Register"}
              </button>
            </form>
            <div className='flex justify-center border-b border-gray-400 text-gray-400 my-4'>
              <p className='relative -bottom-3 bg-zinc-900 px-4'>or with</p>
            </div>
            <div className='grid gap-4 pt-5'>
              {Object.values(providers)
                .filter((provider) => provider.type !== "credentials")
                .map((provider) => (
                  <button
                    key={provider.name}
                    className='border py-1 rounded'
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: `${window.location.origin}`,
                      })
                    }
                  >
                    {provider.name}
                  </button>
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
