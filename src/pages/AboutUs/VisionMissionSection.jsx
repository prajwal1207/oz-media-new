import React from 'react';
import Card from '../../components/common/Card';

const VisionMissionSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-primary-red font-montserrat font-bold text-xl mb-2">About Us</h2>
          <h3 className="text-white font-montserrat font-bold text-5xl mb-6">We love what we do</h3>
          <p className="text-white font-roboto leading-7 max-w-2xl">
            Quisque venenatis vestibulum consequat. Vivamus ac urna nulla. Duis sit amet consectetur nisi, eget elementum nunc. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            title="Our Vision" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec." className="relative"
            icon={
              <div className="absolute top-0 right-0">
                <img src="/images/img_abstractgeometricseamlesspatterns2zqt82e_1.png" alt="Geometric Pattern" className="w-24 h-10" />
              </div>
            }
          />
          
          <Card 
            title="Our Mission" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec." className="relative"
            icon={
              <div className="absolute top-0 right-0">
                <img src="/images/img_abstractgeometricseamlesspatterns2zqt82e_1.png" alt="Geometric Pattern" className="w-24 h-10" />
              </div>
            }
          />
        </div>
        
        <div className="mt-8 flex justify-start">
          <button className="border border-primary-red text-white font-montserrat font-bold py-4 px-8 flex items-center">
            Read More
            <img src="/images/img_plus.svg" alt="Plus" className="ml-2 w-2 h-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;