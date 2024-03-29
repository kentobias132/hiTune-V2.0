import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
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
      </section>    </div>
  )
}

export default Contact
