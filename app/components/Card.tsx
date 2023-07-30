import React from "react";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarDemo } from "./Avatar";
import { ButtonDemo } from "./ButtonDemo";

export const Carta = () => {
  return (
    <Card className="relative cartaChar lg:bg-center w-full lg:w-[300px]  h-[70ch] border-accentColor border-2">
      <AvatarDemo />
      <CardHeader>
        <CardTitle>
          <br />
        </CardTitle>
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        <CardTitle className="text-center cardTitle text-accentColor ">Trevor Belmont</CardTitle>
        <CardDescription className="cardDescription text-accentColor">
        I've never lost a fight to a man nor  beast
        </CardDescription>
        <p className="flex gap-4 text-sm justify-center items-center text-white mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map text-accentColor"
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
          Wallachia, Romania
        </p>
        <p className="flex gap-4 text-sm justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-calendar text-accentColor"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          23 years old
        </p>
      </CardContent>
      <CardFooter className="mt-12 grid grid-cols-2 gap-4">
        <ButtonDemo elLink="/char-info" buttonText="Character Info"  />
        <ButtonDemo elLink="/rules-rol" buttonText="Rules"  />
        <ButtonDemo elLink="/user-info" buttonText="User Info"  />
        <ButtonDemo elLink="/credits" buttonText="Credits"  />
      </CardFooter>
    </Card>
  );
};
