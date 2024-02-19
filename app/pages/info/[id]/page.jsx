"use client";
import { useParams } from "next/navigation";
import React from "react";

const Bired = ({ params }) => {
  const { id } = useParams();
  return <div> {id}</div>;
};

export default Bired;
