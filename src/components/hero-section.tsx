"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import profile_img from "@/assets/personal.png"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const bubbles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 10 + 10,
      animationDelay: Math.random() * 5,
    }));
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_AndrésArteaga.pdf';
    link.download = 'CV_AndrésArteaga';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
        {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${bubble.width}px`,
            height: `${bubble.height}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            transform: `scale(${bubble.scale})`,
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.1) 70%)",
            animation: `float ${bubble.animationDuration}s ease-in-out infinite`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        />
      ))}
        </div>
      </div>

      <div className="container px-4 mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-block mb-6 relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/10 mx-auto shadow-xl">
              <Image src={profile_img} alt="Profile" className="w-full h-full object-cover" width={128} height={128} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Disponible
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          >
            Soy Andrés Arteaga
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-4">Desarrollador Web</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Con mas de 3 años de experiencias digitales excepcionales con las últimas tecnologías web. Apasionado
              por el diseño y la funcionalidad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-none"
              onClick={downloadCV}
            >
              Descargar CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white"
              onClick={scrollToProjects}
            >
              Ver Proyectos
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>
    </section>
  )
}

