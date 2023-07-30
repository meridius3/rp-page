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

export const CartaLikes = () => {
  return (
    <Card className="relative bg-accentColor w-full">
      <CardHeader>
       
        <CardTitle className="cardTitle text-red-600 ">Likes/Dislikes</CardTitle>
       
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        
       
        <div className="grid gap-4 text-sm justify-center items-center">
        <h2 className="card-title">Likes</h2>
      <p>La verdad es no tengo "kinks" muy definidos, normalmente me adapto a la persona con la que me toque rolear y de asi trabajan las cosas pero bien podria listar en esta seccion los tipos de rp que mas hago</p>
      <ul className="list-disc">
        <li>
            Domination (Este es basicamente un default, rara vez he visto a Trevor no ser 100% dominante pero hey, well see)
        </li>
        <li>
            Power dinamic (Sea Jefe/empleada, Profesor/alumna, Maestro/aprendiz (En casos medievales) y ese tipo de cosas)
        </li>
        <li>
            Hidden desire (A veces se solapa mucho con el punto anterior pero tengamos como ejemplo vecinos que suelen mirarse por al ventana sabiendo bien que el otro los ve)
        </li>
        <li>
            Foreplay (Sea un tease antes del asunto o uno que lleva una larga escena hasta recien llegar al climax, un buen juego previo siempre viene bien)
        </li>
        
      </ul>
      Desde aqui vienen kinks que dependen muchisimo de la persona mas que nada por lo que dije al principio, me adapto mucho al gusto del otro y son:
      <ul className="list-disc">
        <li>
            Rough Sex
        </li>
        <li>
            Hidden sex
        </li>
        <li>
            Public sex (yeah every sex )
        </li>
        <li>
            Pet-play (Y diria que en esto tambien entran dinamicas "amo/sirviente" o cualquier derivado )
        </li>
        <li>
            Breeding 
        </li>
      </ul>
      Diria que hay muchos mas en la lista de arriba pero eso diria que se discute mas al organizar el plot/rol
      <h2 className="card-title">Dislikes</h2>
      <p>
        Para ser sinceros tengo muy pocos limites, roleo con un abanico muy amplio de personas pero una regla general es:
        Si es una de estas probablemente sea uno de mis limites
      </p>
      <ul className="list-disc">
        <li>
            Kinks muy asqueros, you know the type
        </li>
        <li>
            Kinks muy violentos 
        </li>
      </ul>
      <p>Si alguno piensa que entra dentro de esta categoria, just ask, yo no hago kink shaming a nadie por mas loco que me parezca</p>
        </div>
      </CardContent>
   
    </Card>
  );
};
