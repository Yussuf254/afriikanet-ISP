import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Afriikanet",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="max-w-md mx-auto">
            <SignUp />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
