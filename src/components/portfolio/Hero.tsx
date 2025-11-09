import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, MapPin, Mail, Phone, Linkedin } from "lucide-react";
// import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient text-white overflow-hidden">
      {/* Space background elements */}
      <div className="absolute inset-0 space-stars"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/20"></div>
      
      {/* Floating cosmic elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-56 h-56 bg-primary/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-accent/40 rounded-full blur-xl animate-bounce"></div>
      
      {/* Nebula effects */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                MBA Graduate • IIM Trichy
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Mahanthy <span className="text-accent">Dhanavath</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                Product Manager & Digital Transformation Specialist
              </p>
              <p className="text-lg text-blue-200 leading-relaxed max-w-2xl">
                Product Owner in Corporate Banking, delivering Channels like Host To Host, 
                Charges & Customer On-Boarding via agile execution, 
                stakeholder management & omni-channel strategy.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="font-semibold text-white mb-3">Education</h3>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/lovable-uploads/d44995bd-047a-41eb-8f8f-9d81c10e12a6.png" 
                    alt="IIM Trichy logo"
                    className="w-10 h-10 object-contain bg-white rounded-full p-1"
                  />
                  <p className="text-blue-100 text-sm">MBA from IIM Trichy</p>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/3dfb4478-02a2-41f1-9370-12c07ebd0696.png" 
                    alt="IIT Patna logo"
                    className="w-10 h-10 object-contain bg-white rounded-full p-1"
                  />
                  <p className="text-blue-100 text-sm">B.Tech from IIT Patna</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="font-semibold text-white mb-2">Certifications</h3>
                <button 
                  onClick={() => window.open('/lovable-uploads/2c8138c6-69e8-43a3-aa7c-a546da6049c3.png', '_blank')}
                  className="text-blue-100 text-sm hover:text-white transition-colors cursor-pointer text-left block w-full"
                >
                  Level D PMP Certified
                </button>
                <button 
                  onClick={() => window.open('/lovable-uploads/10f407f0-89ae-47b5-a307-36f15c0ddfd1.png', '_blank')}
                  className="text-blue-100 text-sm hover:text-white transition-colors cursor-pointer text-left block w-full"
                >
                  Product Management Certified
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Chennai, IN</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>dhanavathmahanthy@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9440897449</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('/Mahanthy_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/20 bg-accent/20"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                About Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/20 bg-primary/20"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Work Experience
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src="/lovable-uploads/04b9190a-fd07-4ea8-85df-38ffc89bbadc.png" 
                  alt="Mahanthy Dhanavath - Professional Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-white/20 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;