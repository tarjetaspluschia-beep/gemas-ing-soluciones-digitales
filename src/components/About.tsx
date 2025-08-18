import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import teamImage from '@/assets/team-gemas.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Brindar soluciones integrales en bioseguridad, inocuidad y control de plagas con el más alto estándar de calidad.',
    },
    {
      icon: Heart,
      title: 'Visión',
      description: 'Ser la empresa líder en servicios de bioseguridad en la región, generando impacto social y ambiental positivo.',
    },
    {
      icon: Award,
      title: 'Valores',
      description: 'Compromiso, responsabilidad, innovación y respeto por el medio ambiente en cada proyecto.',
    },
  ];

  const certifications = [
    'Ingeniera de Alimentos certificada',
    'Registro ICA para control de plagas',
    'Certificación en sistemas HACCP',
    'Empresa SAS BIC registrada',
  ];

  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-light text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Quiénes somos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia técnica con <span className="text-primary">compromiso social</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Somos una empresa SAS BIC (Sociedad de Beneficio e Interés Colectivo) comprometida 
            con la excelencia técnica y el impacto social positivo en Casanare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={teamImage}
              alt="Equipo profesional GEMAS Ingeniería"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">SAS BIC</div>
              <div className="text-sm">Beneficio Social</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Respaldo técnico y compromiso social</h3>
              <p className="text-muted-foreground">
                Con más de 15 años de experiencia en el sector, GEMAS Ingeniería se ha consolidado 
                como una empresa líder en bioseguridad, inocuidad y control de plagas en la región 
                de Casanare.
              </p>
              <p className="text-muted-foreground">
                Nuestro equipo está liderado por una Ingeniera de Alimentos con amplia experiencia 
                en el sector industrial, respaldada por certificaciones técnicas y un compromiso 
                inquebrantable con la calidad y el servicio.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Certificaciones y respaldos:</h4>
              <div className="grid gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border shadow-sm">
              <div className="mx-auto w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;