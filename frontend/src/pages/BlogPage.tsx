import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'AI in Education: How It’s Transforming Learning',
    date: 'June 20, 2025',
    excerpt: 'Discover how artificial intelligence is revolutionizing the educational sector — from personalized learning to automated grading.',
    author: 'Team TechLambda',
    slug: 'ai-education'
  },
  {
    id: 2,
    title: 'Top 5 Cloud Platforms for Startups in 2025',
    date: 'June 15, 2025',
    excerpt: 'Which cloud service provider should your startup choose? We break down the top options and their pros & cons.',
    author: 'TechLambda Cloud Team',
    slug: 'cloud-platforms-2025'
  },
  {
    id: 3,
    title: 'Why UI/UX Matters More Than Ever',
    date: 'June 10, 2025',
    excerpt: 'Good design isn’t just pretty — it drives results. Let’s explore the real-world impact of intuitive user experiences.',
    author: 'Sneha Mehra',
    slug: 'ui-ux-importance'
  },
  {
    id: 4,
    title: 'Cybersecurity: Why It Matters More Than Ever',
    date: 'June 26, 2025',
    excerpt: 'Think cybersecurity is just for tech pros? Think again. Here’s why it matters to everyone online — and how to stay safe.',
    author: 'Ekta Prabhakar',
    slug: 'cybersecurity'
  }
];

const BlogPage: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-background text-textPrimary min-h-screen">
      <h1 className="text-4xl font-bold text-secondary mb-10">TechLambda Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-primary mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-1">By {post.author} | {post.date}</p>
            <p className="text-textSecondary text-sm mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-orange-500 hover:underline font-medium text-sm"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-500 text-sm">
        Want to contribute?{' '}
        <a href="mailto:hr@techlambda.com" className="text-orange-500 underline">
          Email us your article ideas
        </a>
      </p>
    </section>
  );
};

export default BlogPage;
