import { Github, Linkedin, Mail } from "lucide-react";
import TechStack from "@/components/tech-stack";
import ProjectCard from "@/components/project-card";
import HeroSection from "@/components/hero-section";
import ContactForm from "@/components/contact-form";

import medicall24 from "@/assets/project_medicall24.jpg";
import mapa from "@/assets/map-monteria-all-major-minor-260nw-2341297771.webp";
import wayuu from "@/assets/wayu.png";
import kogui from "@/assets/kogi-colombia-tradition.jpg";
import gemelo from "@/assets/Group17.png";
import sgames21 from "@/assets/Group22.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <HeroSection />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Proyectos</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/20 -z-10 transform -rotate-1">
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes y destacados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Comerción web para empresa de telemedicina"
            description="Una plataforma de comercio electrónico de servicios de telemedicina"
            tags={["React js", "Redux", "Tailwind CSS", "Supabase"]}
            image={medicall24}
            link="https://appmedicall24.com/"
          />
          <ProjectCard
            title="Mapa Sociolinguistico de Montería"
            description="Analizar y visualizar las variaciones lingüísticas en diferentes zonas de la ciudad"
            tags={[
              "Next.js",
              "Create My Map",
              "Tailwind CSS",
              "Flask",
              "MySQL",
            ]}
            image={mapa}
            link="https://mapa-sociolinguistico.vercel.app/"
          />
          <ProjectCard
            title="Traductor Español-Wayuu "
            description="Aplicación web para traducir textos de español a wayuu y viceversa, utilizando modelos de aprendizaje automático."
            tags={["Vue js", "Flask", "Scikit-learn", "TensorFlow"]}
            image={wayuu}
            link="https://traductor-wayuu.vercel.app/"
          />
          <ProjectCard
            title="Diccionario de la lengua de los Kogui"
            description="Diccionario para preservar y facilitar el aprendizaje de su lengua, permitiendo la búsqueda y exploración de palabras, oraciones e información"
            tags={["Next js", "Flask", "MySQL", "Tailwind CSS", "TypeScript"]}
            image={kogui}
            link="https://diccionario-kogui-two.vercel.app/"
          />
          <ProjectCard
            title="Gemelo Digital Académico"
            description="Gemelo Digital para realizar predicciones de rendimiento académico, utilizando modelos de aprendizaje automático, asi como la simulación de posibles escenarios futuros."
            tags={["React js", "Flask", "MySQL", "Scikit-learn"]}
            image={gemelo}
            link="https://dtwins.vercel.app/"
          />
          <ProjectCard
            title="Sistema tutor Sgames21 Desktop"
            description="Sistema tutor para escritorio, que desarrolla el fortalecimiento de las competencias del siglo 21, especificamente la de pensamiento crítico - En Construcción."
            tags={["React js", "Express", "PostgreSQL", "TypeScript"]}
            image={sgames21}
            link="http://24.199.103.0/"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="skills"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-800/50"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Tecnologías</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-green-500/20 -z-10 transform -rotate-1">
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Herramientas y tecnologías con las que trabajo.
          </p>
        </div>

        <TechStack />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Contacto</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-500/20 -z-10 transform -rotate-1">
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Correo</h3>
                  <p className="text-gray-300">
                    aarteagaramos@correo.unicordoba.edu.co
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/andres-felipe-arteaga-ramos-38b67a272/"
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/andres-felipe-arteaga-ramos
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Github className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">GitHub</h3>
                  <a
                    href="https://github.com/AnDevArteaga"
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/AnDevArteaga
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} Andrés Arteaga 
        </p>
      </footer>
    </main>
  );
}
