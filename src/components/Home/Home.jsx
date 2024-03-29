import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero.jpeg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:pt-[10rem] sm:pb-[6rem] mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-left sm:text-left sm:mr-auto">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Music that moves you.
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Create your own personalized playlists, listen offline, and get
              curated recommendations on Spotify.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                className=" inline-flex text-white items-center px-7 py-3 font-medium bg-black rounded-lg hover:opacity-75"
                to="https://hitune.surge.sh/"
                target="_blank"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-green-700 rounded-lg hover:opacity-75"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-[22rem] sm:w-[30rem] ml-auto"
            src={HeroImg}
            alt="image1"
          />
        </div>
      </aside>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-20">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <HeadphonesIcon className="h-12 text-green-700 w-12 mx-auto" />
              <h3 className="text-xl font-bold">Personalized Playlists</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your soundtrack. Your mood. Your music. Let our personalized
                playlists set the tone for your day.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <DownloadCloudIcon className="h-12 text-green-700 w-12 mx-auto" />
              <h3 className="text-xl font-bold">Offline Listening</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Take your music anywhere. Download your favorite tracks and
                playlists to listen offline.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <MusicIcon className="h-12 text-green-700 w-12 mx-auto" />
              <h3 className="text-xl font-bold">Curated Recommendations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Discover new music. Our expert curators handpick the best songs
                and artists just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="grid gap-4 max-w-2xl text-center lg:gap-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to experience the music?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
            <input
                className="max-w-lg flex-1 border-[1px] px-1 py-2 outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button className='bg-green-600 px-4 rounded-sm text-white' type="submit">Sign Up</button>
             </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1> */}
    </div>
  );
}

function DownloadCloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m8 17 4 4 4-4" />
    </svg>
  );
}

function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
