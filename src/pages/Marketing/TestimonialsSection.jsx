import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-[#070707]">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-[#fd4360] font-bold text-xl mb-4">Testimonials</h2>
          <h3 className="text-white font-bold text-5xl">What people are saying</h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/5">
            <img src="/images/img_quotesicon_1.png" alt="Quotes" className="w-[210px] h-[210px]" />
          </div>
          
          <div className="md:w-4/5">
            <div className="mb-12">
              <p className="text-white text-lg leading-9 mb-8">
                Etiam rhoncus lacus eget volutpat molestie. Mauris at diam hendrerit, cursus odio eget, scelerisque dolor. Pellentesque cursus tempor elit. Nam augue justo, vestibulum eget turpis quis, pulvinar vehicula nulla. Donec tincidunt lacus sed posuere feugiat. Praesent nec ex odio. Ut commodo sollicitudin egestas. Praesent consectetur nibh sit amet blandit dictum. Suspendisse aliquam condimentum fringilla. In lectus leo, scelerisque vitae feugiat at, commodo vitae turpis.
              </p>
              
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Jacob Kornelius</h4>
                <p className="text-[#fd4360] text-sm">CEO Youseo</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <img src="/images/img_abstractgeometricseamlesspatterns2zqt82e_2.png" alt="Abstract Pattern" className="w-[255px] h-[33px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;