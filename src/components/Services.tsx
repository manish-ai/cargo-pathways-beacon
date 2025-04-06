
import { Truck, Ship, Plane, Package, Navigation, Warehouse, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Road Freight",
    description: "Reliable door-to-door delivery with our extensive fleet of trucks and vans for local and national distribution.",
    icon: Truck,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Sea Freight",
    description: "Cost-effective ocean freight solutions for international shipping with tracking and customs clearance.",
    icon: Ship,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Air Freight",
    description: "Express air shipping services for time-sensitive cargo with global coverage and seamless coordination.",
    icon: Plane,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Warehousing",
    description: "State-of-the-art storage facilities with inventory management systems and distribution services.",
    icon: Warehouse,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Specialized Shipping",
    description: "Tailored solutions for oversized, fragile, or temperature-controlled goods requiring special handling.",
    icon: Package,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Supply Chain",
    description: "End-to-end supply chain management with logistics consulting and optimization services.",
    icon: ShoppingCart,
    color: "bg-teal-50 text-teal-600",
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const ServiceCard = ({ title, description, icon: Icon, color }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
      <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-4", color)}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-navy-light/10 rounded-full text-navy-light text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Comprehensive Logistics Solutions</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From road transport to complex supply chain management, we offer end-to-end logistics services tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-orange hover:text-orange-dark font-semibold transition-colors"
          >
            <span>Learn more about our services</span>
            <Navigation className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
