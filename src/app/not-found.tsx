import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Afriikanet",
};

const ErrorPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 pt-24 pb-12 md:pt-28 md:pb-16 mt-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">404</h1>
            <p className="text-lg md:text-xl text-amber-400">Page Not Found</p>
          </div>
        </div>
      </section>
      <NotFound />
    </>
  );
};

export default ErrorPage;
