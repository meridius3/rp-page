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

export const CartaRules = () => {
  return (
    <Card className="relative bg-accentColor w-full">
      <CardHeader>
       
        <CardTitle className="cardTitle text-red-600 ">Reglas</CardTitle>
       
        <CardDescription>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        
       
        <div className="grid gap-4 text-sm justify-center items-center">
        <h2 className="card-title">Respeto y buen rollo</h2>
      <p>Se que detras de cada personaje hay una persona asi que intento tener el mayor nivel de respeto o como minimo buen rollo al entrar al md o interactuar por TL, espero que ese mismo nivel de respeto se mantenga hacia mi en nuestras interacciones</p>
      <h2 className="card-title">Paciencia</h2>
      <p>Esto mas que una regla es un enorme warning para todo el que quiera rolear conmigo, tengo horarios de trabajo y estudio muy muy apretados y hay periodos de tiempo en los que simplemente estoy inactivo por que al siguiente dia surge algo grave. Me disculpo por adelantado a la gente que pueda llegar a dejar colgada pero desde ahora tratare de avisar con antelacion antes de cada periodo de ausencia</p>
      <h2 className="card-title">Cuenta de rol largo/medio</h2>
      <p>Ya he tenido alguna que otra experiencia con gente que simplemente no le gusta que escriba tanto, tambien dejo aqui eso como warning, me explayo a veces demasiado pero yo no espero que la gente con la que roleo alcance mis linea, si sientes algo como "es demasiado no puedo igualar eso" no pienses de esa manera, me divierto roleando con cualquier tipo de extension de rol asi que eso no te incomoda eres bienvenido </p>
      <h2 className="card-title">Hablar es siempre bienvenido</h2>
      <p>Si sienten que algo les incomoda de mi rol, piensan que cambiar algo del plot puede ser mas divertido o cualquier otra sugerencia que tengan son libres de comentar todo lo que quieran, no tengan miedo no muerdo si no me lo piden</p>
      
        </div>
      </CardContent>
   
    </Card>
  );
};
