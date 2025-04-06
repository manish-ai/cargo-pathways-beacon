
import { Globe, Package, Truck, Users } from 'lucide-react';

const stats = [
  {
    value: "2.5M+",
    label: "Deliveries Completed",
    icon: Package,
  },
  {
    value: "150+",
    label: "Countries Covered",
    icon: Globe,
  },
  {
    value: "500+",
    label: "Vehicles in Fleet",
    icon: Truck,
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
    icon: Users,
  },
];

const Stats = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy-dark to-navy-light text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Reach, Reliable Results</h2>
          <p className="text-white/80">
            With decades of experience and a global network, we've built a reputation for reliability and excellence in the logistics industry.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-orange mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Decades of Excellence in Logistics</h3>
            <p className="mb-6 text-white/80">
              Founded in 1995, CargoPro has grown from a small local courier service to a global logistics provider trusted by businesses of all sizes. Our commitment to innovation and customer satisfaction has driven our growth across continents.
            </p>
            <ul className="space-y-3">
              {[
                "State-of-the-art tracking technology",
                "Eco-friendly transportation solutions",
                "Custom clearance expertise",
                "Industry-leading safety standards"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 bg-orange rounded-full flex-shrink-0 mt-1"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-white/20 blur-md opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop" 
              alt="Logistics operations center" 
              className="relative rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
