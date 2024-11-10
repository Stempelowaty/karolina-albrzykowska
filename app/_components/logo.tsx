import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-full bg-foreground text-background font-lexend flex flex-col items-center py-5">
      <div className="flex flex-col items-center text-foreground w-36 h-24 justify-center rounded-xl">
        <Image
          src={"/logo.svg"}
          alt={""}
          width={300}
          height={300}
          className="w-full h-64 object-cover bg-fixed"
        />
      </div>
    </div>
  );
};
