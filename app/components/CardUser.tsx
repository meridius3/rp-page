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

export const CartaUser = () => {
  return (
    <Card className="relative bg-accentColor w-full">
      <CardHeader>
       
        <CardTitle className="cardTitle text-red-600 ">Info del user (21 yo)</CardTitle>
       
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        
       
        <div className="grid gap-4 text-sm justify-center items-center">
        <h2 className="card-title">Friendly</h2>
      <p>Como ya he escrito en las reglas trato de ser lo mas amigable posible asi que si quieren hablar fuera de rol o conversar cosas sobre rol no tengan problemas en hablarme</p>
      <h2 className="card-title">Role-player "experiementado"</h2>
      <p>Si bien llevo poco tiempo roleando nsfw tengo unos 5 años de experiencia roleando todo tipo de cosas, desde fantasia hasta cyberpunk, desde narrativo hasta dnd standard asi que pueden esperar aunque sea un poquito de calidad en las cosas que escribo, como minimo sentimiento</p>
      <h2 className="card-title">Sr. Talks a lot</h2>
      <p>Hablo mucho, enserio, hay a la que eso le agrada pero a las que no pls comentenmelo antes de "meterme en la trama"  para acortar las cosas que digo por que no hay peor cosa que estar pensando descripciones detalladas y que te corten el animo en un tiro</p>
      <h2 className="card-title">Esp/Eng</h2>
      <p>Si bien antes me sentia bastante inseguro con mi roleo en ingles ahora gracias a ciertas personas me siento bastante confiado en poder dar la misma calidad que doy en español a mis homies angloparlantes English speaking folk you are more than welcome to write to me anytime you guys want </p>
      
        </div>
      </CardContent>
   
    </Card>
  );
};
