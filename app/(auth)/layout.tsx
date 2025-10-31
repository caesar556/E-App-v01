import { ReactNode } from "react";
import Particles from "@/components/ui/Particles";

export const metadata = {
  title: "E-App | Auth system",
  description:
    "Welcome to E-App auth system, you can login or register new account",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative  w-full min-h-dvh flex justify-center overflow-hidden">
      <div className="absolute bg-black inset-0 -z-10 ">
        <Particles
          particleColors={["#00008B", "#8F00FF"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={600}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10  w-screen   flex justify-center pt-16">
        {children}
      </div>
    </section>
  );
}
