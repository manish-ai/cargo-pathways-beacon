
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "John Smith",
    position: "Supply Chain Director, TechCorp",
    content: "CargoPro has revolutionized our supply chain operations. Their on-time deliveries and transparent tracking system have reduced our logistics costs by 15%.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=250&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "CEO, Global Retail",
    content: "We've tried several logistics providers over the years, but none have matched CargoPro's level of service and reliability. They truly understand our business needs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Michael Wong",
    position: "Operations Manager, FreshFoods",
    content: "Handling temperature-sensitive products is challenging, but CargoPro's specialized shipping solutions have ensured our products reach customers in perfect condition.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange/10 rounded-full text-orange text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. See what businesses who've worked with us have to say about our logistics services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            <div className="flex justify-center mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 mx-1 rounded-full transition-all duration-300",
                    index === currentIndex ? "bg-orange scale-125" : "bg-gray-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[currentIndex].rating} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-navy-dark">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500">{testimonials[currentIndex].position}</p>
                </div>
                
                <div className="mt-8 flex justify-start space-x-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
