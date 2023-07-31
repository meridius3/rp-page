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
import Link from "next/link";

export const CartaCredits = () => {
  return (
    <Card className="relative bg-accentColor w-full  sm:w-[500px]">
      <CardHeader>
       
        <CardTitle className="cardTitle  text-red-600 ">Creditos</CardTitle>
       
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        
       
      <div className="grid gap-4 text-sm justify-center items-center">
        <h2 className="card-title">Background de la pagina</h2>
        <Link href={"https://www.artstation.com/artwork/Karm2X"}>Karm2X</Link>
      <h2 className="card-title">Backgroud de la carta de inicio</h2>
      <Link href={"https://www.artstation.com/artwork/QrNzlE"}>Baj Singh</Link> 
           <h2 className="card-title">Avatar de la carta de inicio</h2>
           <Link href={"https://oekaki-chan.tumblr.com/image/180717223739"}>Oekaki</Link>
      <h2 className="card-title">Imagen en la seccion de personajes de trevor</h2>
      <p>Sinceramente no tengo ni la menor idea cualquiera que pueda linkearme su perfil en algun sitio que me lo tire por md para ponerlo por aqui </p>
      <h2 className="card-title">Componentes de la pagina </h2>
      <p>ShadcnUi</p>
      
        </div>
      </CardContent>
   
    </Card>
  );
};
