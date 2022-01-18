import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

type LoginPageProps = {
  csrfToken: string | undefined;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return {
    props: {
      csrfToken: await getCsrfToken(ctx),
      providers: await getProviders(),
    },
  };
};

const Login = ({ csrfToken, providers }: LoginPageProps) => {
  return (
    <main className='bg-zinc-900 h-screen text-white'>
      <div className='flex flex-row-reverse max-w-[1300px] mx-auto h-full'>
        <section className='w-1/3 flex items-center'>
          <h1 className="font-['Mazzard'] text-[3rem] text-red-500 p-4 bg-zinc-900 -left-10 transform relative">
            Jajanin
          </h1>
        </section>
        <section className='w-2/3 border-r flex justify-start'>
          <div className='w-[400px] flex justify-center flex-col'>
            <h1 className='text-2xl font-bold'>Sign In</h1>
            <p className='mb-5'>
              No account yet?{" "}
              <Link href='/auth/register'>
                <a className='text-red-500 hover:underline'>Register Here</a>
              </Link>
            </p>
            <form method='POST' action='' className='flex flex-col gap-6'>
              <input type='hidden' name='csrfToken' defaultValue={csrfToken} />
              <div>
                <label htmlFor='user_email'>Email</label>
                <input
                  autoComplete='off'
                  type='email'
                  id='user_email'
                  name='email'
                  className='w-full px-3 py-1.5 rounded mt-2 focus:bg-transparent bg-zinc-700 border border-gray-600'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='user_pass'>Password</label>
                <input
                  type='password'
                  id='user_pass'
                  name='password'
                  className='w-full px-3 py-1.5 rounded mt-2 focus:bg-transparent bg-zinc-700 border border-gray-600'
                />
              </div>
              <button className='w-full bg-red-500 py-1.5 rounded'>
                Login
              </button>
            </form>
            <div className='flex justify-center border-b border-gray-400 text-gray-400 my-4'>
              <p className='relative -bottom-3 bg-zinc-900 px-4'>or with</p>
            </div>
            <div className='grid grid-cols-2 gap-4 pt-5'>
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

export default Login;
