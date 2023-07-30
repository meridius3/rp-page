import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarDemo() {
    return (
      <Avatar className="w-36 h-36 absolute top-[-17%] left-[30%] lg:left-[26.5%] lg:top-[-16%] border-t-4 border-r-4 border-red-600 mb-10">
        <AvatarImage src="https://64.media.tumblr.com/721e9304f9d085f8c1e8ae00aa4a465d/tumblr_pj43rv8Ywb1rsfi5lo1_1280.gifv" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  