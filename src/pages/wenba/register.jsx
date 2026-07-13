import React from "react";
import Head from "next/head";
import RegisterForm from "@/components/screens/wenba/register/register_form";

const WenbaRegisterPage = () => {
  return (
    <>
      <Head>
        <title>WENBA Vendor Registration</title>
        <meta
          name="description"
          content="Register as a vendor on WENBA (Women Entrepreneurs Network & Business Alliance). Join our network to showcase your products, access corporate procurement, and explore new business opportunities."
        />
      </Head>
      <RegisterForm />
    </>
  );
};

export default WenbaRegisterPage;
