import React from 'react';

const AchievementsSection = () => {
  const digitalMarketingAwards = [
    {
      id: 1,
      agency: "Influencer Marketing Agency",
      award: "Top Social Media Agencies Worldwide",
      year: "2023"
    },
    {
      id: 2,
      agency: "Stratups Marketing Agency",
      award: "Top Digital Marketing Agencies for Startups",
      year: "2022"
    },
    {
      id: 3,
      agency: "Cruncubase",
      award: "Seed Stage Digital Marketing Agencies 2022",
      year: "2022"
    }
  ];

  const blockchainAwards = [
    {
      id: 1,
      agency: "ICO Holper",
      award: "Top ICO Marketing Agencies 2020",
      year: "2020"
    },
    {
      id: 2,
      agency: "Software Agencies Award",
      award: "Crypto Marketing Agency 2021",
      year: "2021"
    },
    {
      id: 3,
      agency: "Coyn Codek",
      award: "Best Crypto Marketing Agencies Worldwide",
      year: "2022"
    }
  ];

  const fintechAwards = [
    {
      id: 1,
      agency: "Fintech Award",
      award: "Best Marketing Agencies for Fintech Company",
      year: "2023"
    },
    {
      id: 2,
      agency: "Fintech Plus",
      award: "Best Fintech Marketing Agencies",
      year: "2020"
    },
    {
      id: 3,
      agency: "Fintech Draft Award",
      award: "Best Fintech Marketing Agencies",
      year: "2023"
    }
  ];

  const AwardRow = ({ agency, award, year }) => (
    <div className="border-t border-border-gray py-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <p className="text-primary-red font-montserrat font-bold text-base">{agency}</p>
        </div>
        <div className="col-span-7">
          <p className="text-white font-montserrat font-bold text-lg">{award}</p>
        </div>
        <div className="col-span-2 text-center">
          <p className="text-white font-montserrat font-bold text-lg">{year}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark-tertiary">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-primary-red font-montserrat font-bold text-xl mb-2">Awards</h2>
          <h3 className="text-white font-montserrat font-bold text-5xl mb-6">Our achievement as Digital Marketing Company</h3>
        </div>
        
        <div className="mb-16">
          <h4 className="text-white font-montserrat font-bold text-2xl mb-6">Digital Marketing Award</h4>
          
          {digitalMarketingAwards.map(award => (
            <AwardRow 
              key={award.id}
              agency={award.agency}
              award={award.award}
              year={award.year}
            />
          ))}
        </div>
        
        <div className="mb-16">
          <h4 className="text-white font-montserrat font-bold text-2xl mb-6">Blockchain Marketing Agency Awards</h4>
          
          {blockchainAwards.map(award => (
            <AwardRow 
              key={award.id}
              agency={award.agency}
              award={award.award}
              year={award.year}
            />
          ))}
        </div>
        
        <div>
          <h4 className="text-white font-montserrat font-bold text-2xl mb-6">Fintech Marketing Agency Awards</h4>
          
          {fintechAwards.map(award => (
            <AwardRow 
              key={award.id}
              agency={award.agency}
              award={award.award}
              year={award.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;