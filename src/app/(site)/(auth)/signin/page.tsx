import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Afriikanet",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="max-w-md mx-auto">
            <Signin />
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
