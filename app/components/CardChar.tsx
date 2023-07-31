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

export const CartaChar = () => {
  return (
    <Card className="relative bg-accentColor w-full sm:w-[500px] ">
      <CardHeader>
       
        <CardTitle className="cardTitle text-red-600 ">Historia</CardTitle>
       
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        
       
        <p className="flex gap-4 text-sm justify-center items-center">
          Trevor fue el último miembro sobreviviente del clan Belmont, una
          familia que dedicó sus vidas a luchar contra las criaturas de la
          oscuridad y proteger a la humanidad. Sin embargo, se difundieron
          rumores de que el clan Belmont practicaba la magia negra atrayéndo el
          mal hacia ellos, lo que causó que la familia fuera exiliada y
          excomulgada por la Iglesia, y finalmente dejara a Trevor solo por su
          cuenta.
        </p>
      </CardContent>
   
    </Card>
  );
};
