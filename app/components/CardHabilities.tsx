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

export const CartaHabilities = () => {
  return (
    <Card className="relative bg-accentColor w-full sm:w-[500px]">
      <CardHeader>
       
        <CardTitle className="cardTitle text-red-600 ">Habilidades</CardTitle>
       
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        
       
        <div className="grid gap-4 text-sm justify-center items-center">
        <h2 className="card-title">Combatiente experto</h2>
      <p>Es un guerrero excepcional. Él está en una condición física máxima y posee 'reflejos como los de un gato'. Pudo ganar en una pelea en un bar contra cuatro adversarios a pesar de que estaba borracho</p>
      <h2 className="card-title">Dominio de las armas</h2>
      <p>Es un maestro con el látigo y la espada corta de su familia. Él ha demostrado ser capaz de una precisión extrema con su látigo y se mantuvo firme en un duelo de espadas contra Alucard; el propio hijo de dracula el cual es un espadachin experto. También es bastante capaz con otras armas, pudiendo lanzar lanzas y hachas con precisión mortal.</p>
      <h2 className="card-title">Conocimiento de monstruos</h2>
      <p>Está completamente versado en los estudios de la familia Belmont sobre monstruos y aquello que consideramos como sobrenatural. Como el último de los Belmont, es posiblemente el mejor experto del mundo en monstruos y demonios. </p>
      <h2 className="card-title">Conocedor de la mentalidad de turbas</h2>
      <p>Su conocimiento y la excomunión por parte de la Iglesia lo han hecho muy consciente de los peligros de la mentalidad de turbas, además de ser resistente a esta. Toda una vida como chivo expiatorio de los problemas le ha enseñado a evitar la amenaza que sus conciudadanos le plantean. Su experiencia lo ayudó a proteger a los Oradores idealistas de la amenaza de la Iglesia y la turba, ya que fue capaz de anticiparse a lo peor. </p>
      
        </div>
      </CardContent>
   
    </Card>
  );
};
