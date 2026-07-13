import React from "react";
import Head from "next/head";
import JoinForm from "@/components/screens/membership/join/join_form";

const MembershipJoinPage = () => {
  return (
    <>
      <Head>
        <title>Join SIAWED - Membership Application</title>
        <meta
          name="description"
          content="Apply to join the SIAWED community. We offer memberships for Students, Homepreneurs, SMEs, and Diamond Mentors to support women in business."
        />
      </Head>
      <JoinForm />
    </>
  );
};

export default MembershipJoinPage;
