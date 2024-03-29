import React from "react";

function About() {
  return <div>     <section className="w-full py-12 md:py-24 lg:py-32">
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
</section></div>;
}

export default About;


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