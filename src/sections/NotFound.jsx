import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="border bg-primary-white h-screen w-full flex  items-center justify-center">
      <div className="flex flex-col items-center text-center gap-6 text-primary-black mx-auto px-4 md:px-10 xl:px-28 pb-10 pt-12 lg:py-10 xl:py-16">
        <h1 className="text-4xl font-bold text-primary-black">
          404 Error | Page Not Found
        </h1>

        <p className="text-lg text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          to="/"
          className="bg-primary-black text-primary-white w-max py-3 px-6 rounded-md text-lg transition-all hover:bg-zinc-700">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
