import React from "react";
import Intro from "../components/Intro";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Intro
        title={"Schedule Your Appointment | OPD"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;