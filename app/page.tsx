import { RegistrationForm } from "@/components/registration-form"
import { FloatingTechElements, ChibiMascot } from "@/components/chibi-mascot"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <FloatingTechElements />
      <div className="tech-grid-background absolute inset-0" aria-hidden="true" />
      <div className="circuit-pattern absolute inset-0 opacity-20" aria-hidden="true" />
      
    
      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header Section */}
        <header className="text-center mb-12">
          {/* Header Image - Full width on mobile, no margin */}
          <div className="w-full mb-6">
            <Image
              src="/header.png"
              alt="Vibe-a-thon"
              width={1920}
              height={400}
              className="w-full h-auto object-cover drop-shadow-lg"
              priority
            />
          </div>
          
          {/* Subtitle */}
          <div className="px-4 md:px-8">
            <p className="text-2xl md:text-2xl text-vibe-dark/80 font-medium mb-2">
              Registration form
            </p>
            <p className="text-vibe-dark/60 max-w-2xl mx-auto flex items-center justify-center gap-2">
              Join the ultimate coding adventure and level up your skills to be ready for hackathon!
           </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-6" aria-hidden="true">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent to-vibe-mint" />
              <div className="w-3 h-3 rounded-full bg-vibe-teal" />
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-vibe-mint via-vibe-teal to-vibe-mint" />
              <div className="w-3 h-3 rounded-full bg-vibe-teal" />
              <div className="w-16 h-1 rounded-full bg-gradient-to-l from-transparent to-vibe-mint" />
            </div>
          </div>
        </header>

        {/* Registration Form */}
        <div className="px-4 md:px-8">
          <RegistrationForm />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-vibe-dark/50 pb-8 px-4 md:px-8">
          <p>
            Made with vibe for the Vibe-a-thon community
          </p>
          <p className="mt-2">
            Questions? Contact us at{" "}
            <a 
              href="mailto:itcirclekhec@gmail.com" 
              className="text-vibe-teal hover:underline"
            >
              itcirclekhec@gmail.com
            </a>
          </p>
        </footer>
      </div>
      
      {/* Bottom mascots */}
      <ChibiMascot 
        position="bottom-left" 
        imageSrc="/mascot1.png"
        alt="Cute tech mascot waving" 
        className="hidden md:block"
        animate={true}
      />
      <ChibiMascot 
        position="bottom-right" 
        imageSrc="/mascot2.png"
        alt="Cute tech mascot coding" 
        className="hidden md:block"
        animate={true}
      />
    </div>
  )
}
