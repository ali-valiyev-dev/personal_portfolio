import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-primary-white h-screen">
      <div className="border-4 flex flex-col items-center justify-center text-center gap-6 h-full text-primary-blackmx-auto max-w-screen-2xl px-4 md:px-10 xl:px-28 pb-10 pt-12 lg:py-10 xl:py-16">
        <h2 className="text-4xl font-bold text-primary-black">
          404 Error | Page Not Found
        </h2>

        <p className="text-lg text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          to="/"
          className="bg-primary-black text-primary-white py-3 px-6 rounded-md text-lg transition-all hover:bg-zinc-700">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
