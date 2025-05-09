import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Social Media Marketing Agencies in Indonesia",
      date: "February 15, 2023",
      comments: "No Comments",
      excerpt: "Suspendisse potenti. In eget malesuada erat. Fusce id cursus ante. Maecenas bibendum, mauris ut ultricies dapibus, turpis nisi viverra ante, vitae hendrerit odio lorem et",
      image: "/images/img_blog_1.jpg",
      link: "/blog/social-media-marketing-agencies"
    },
    {
      id: 2,
      title: "A Complete B2B SEO Strategy for 2023",
      date: "February 15, 2023",
      comments: "No Comments",
      excerpt: "Suspendisse potenti. In eget malesuada erat. Fusce id cursus ante. Maecenas bibendum, mauris ut ultricies dapibus, turpis nisi viverra ante, vitae hendrerit odio lorem et",
      image: "/images/img_blog_2.jpg",
      link: "/blog/b2b-seo-strategy"
    },
    {
      id: 3,
      title: "Top 10 Best Ecommerce Marketing Strategies for Your Online Business",
      date: "February 15, 2023",
      comments: "No Comments",
      excerpt: "Suspendisse potenti. In eget malesuada erat. Fusce id cursus ante. Maecenas bibendum, mauris ut ultricies dapibus, turpis nisi viverra ante, vitae hendrerit odio lorem et",
      image: "/images/img_blog_3.jpg",
      link: "/blog/ecommerce-marketing-strategies"
    }
  ];

  return (
    <section className="py-16 bg-[#00000]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#fd4360] font-bold text-xl mb-4">Blog</h2>
          <h3 className="text-white font-bold text-5xl">What's the Latest?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-[#bdbaba23] border border-[#bdbabac6] relative">
              <div className="h-[300px] bg-[#bdbabac6]"></div>
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-4">
                  {post.title}
                </h3>
                <p className="text-[#e3e3e3] text-sm mb-4">
                  {post.date} - {post.comments}
                </p>
                <p className="text-white mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={post.link} 
                  className="text-[#fd4360] font-bold text-lg flex items-center"
                >
                  Read More
                  <img src="/images/img_plus_8x8.svg" alt="Read more" className="ml-2 w-[8px] h-[8px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;