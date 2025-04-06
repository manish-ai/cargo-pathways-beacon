import { Truck, Package, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <div className="relative min-h-screen bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)]">
          <div className="flex flex-col space-y-6">
            <div className="animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <span className="inline-block bg-orange-light/10 text-orange-dark px-4 py-1 rounded-full text-sm font-semibold mb-6">
                #1 Logistics Provider
              </span>
            </div>
            
            <h1 style={{
            animationDelay: "0.3s"
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in text-zinc-950 mx-[20px]">
              Global <span className="text-orange">Logistics</span> Solutions for Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in" style={{
            animationDelay: "0.5s"
          }}>
              We deliver reliability, efficiency, and excellence across the supply chain, 
              connecting your business to opportunities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-navy hover:bg-navy hover:text-white px-8 py-6">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
              <div className="flex flex-col items-center md:items-start mx-[20px]">
                <div className="flex items-center mb-2">
                  <Truck className="text-orange mr-2" size={20} />
                  <span className="font-semibold">Fast Delivery</span>
                </div>
                <p className="text-sm text-gray-500 text-center md:text-left">Guaranteed on-time delivery</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-2">
                  <Package className="text-orange mr-2" size={20} />
                  <span className="font-semibold">Secure Handling</span>
                </div>
                <p className="text-sm text-gray-500 text-center md:text-left">Safe transport of all goods</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-2">
                  <Map className="text-orange mr-2" size={20} />
                  <span className="font-semibold">Global Network</span>
                </div>
                <p className="text-sm text-gray-500 text-center md:text-left">Worldwide shipping coverage</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative animate-fade-in" style={{
          animationDelay: "1.1s"
        }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-orange/20 to-navy-light/20 blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format&fit=crop" alt="Logistics operations" className="w-full h-[600px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>;
};
export default Hero;