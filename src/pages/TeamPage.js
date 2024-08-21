import React from "react";
import Heading from "../component/common/Heading";
import Teams from "../component/home/Teams";

export default function Team() {
  return (
    <>
      <Heading heading="Team" title="Home" subtitle="Team" />
      <Teams />
    </>
  );
}