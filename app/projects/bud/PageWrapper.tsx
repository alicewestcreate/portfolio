import React from "react";
import type { ProjectProps } from "../components/ProjectCard";
import CenterColumnLayout from "@/app/_common/CenterColumnLayout";
import Button from "@/app/_common/Button";

interface Props {
  backgroundImage: string;
}

const PageWrapper = ({ backgroundImage }: Props) => {
  return (
    <>
      <div className="h-48">
        <img
          className="object-cover w-full h-full object-top"
          src={'/images/shadyLeaves.webp'}
        />
      </div>
      <CenterColumnLayout>
        <div className="flex flex-col lg:max-w-screen-md py-5 px-4">
          <div>
            <h1 className="text-3xl font-bold pb-5">
              Bud
              <span className="text-2xl font-light">
                {" "}
                — A dating app for plants{" "}
              </span>
            </h1>
          </div>
          <div>
            <h3 className="pb-2 font-bold"> Overview </h3>
            <p className="pb-5">
              Bud is a dating app for plants. Drawing inspiration from Tinder,
              users take a quiz to find their ideal plant match based on their
              preferences.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/images/budDemo.gif"></img>
          </div>
          <div className="flex gap-3 justify-center my-5">
            <Button label={"View Site"}></Button>
            <Button variant="secondary" label={"Git Hub"}></Button>

          </div>

          <h3 className="pb-2 font-bold">Features and Functionality </h3>
          <ul>
            <li>User preferences collected through dynamic quiz</li>
            <li>Filter results based on user preferences</li>
            <li>Store favourite plants in local storage</li>
            <li>Find nearest independent plant store to purchase plant</li>
          </ul>

          <h3 className="pb-2 font-bold">Design and Architecture</h3>
          <ul>
            <li>User preferences collected through dynamic quiz</li>
            <li>Filter results based on user preferences</li>
            <li>Store favourite plants in local storage</li>
            <li>Find nearest independent plant store to purchase plant</li>
          </ul>

          <h3 className="pb-2 font-bold">Challenges and Solutions</h3>
          <p>
            One of the challenges I faced was devising an efficient filtering
            process that would minimize the total number of loops required. To
            overcome this hurdle, I adopted a basic for loop that eliminated the
            need for an additional callback function. I then incorporated a for
            each loop, along with an if statement and includes method, to
            iterate through the selected preferences and compare them against
            the property values found in the object. This approach not only
            streamlined the filter process, but also eliminated the need for
            data type checks.
          </p>

          <h3 className="pb-2 font-bold">Results and Impact</h3>
          <p>
            Bud is still in the early testing phase, however, it has received
            positive feedback as a unique concept and sassy style.
          </p>

          <h3 className="pb-2 font-bold">Future Improvements</h3>
          <ul>
            <li>User preferences collected through dynamic quiz</li>
            <li>Filter results based on user preferences</li>
            <li>Store favourite plants in local storage</li>
            <li>Find nearest independent plant store to purchase plant</li>
          </ul>
        </div>
      </CenterColumnLayout>
    </>
  );
};

export default PageWrapper;
