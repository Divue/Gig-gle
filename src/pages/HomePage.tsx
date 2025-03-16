import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { CategoryCard } from '../components/CategoryCard';
import { GigCard } from '../components/GigCard';
import { FreelancerCard } from '../components/FreelancerCard';
import { sampleCategories, sampleGigs, sampleFreelancers } from '../lib/utils';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />

      {/* Categories Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <CategoryCard
                  name={category.name}
                  icon={category.icon}
                  count={Math.floor(Math.random() * 100) + 50}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Gigs Section */}
      <section className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trending Gigs
            </h2>
            <button className="flex items-center text-purple-500 hover:text-purple-600">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleGigs.map((gig) => (
              <motion.div
                key={gig.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GigCard gig={gig} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Freelancers Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Top Freelancers
            </h2>
            <button className="flex items-center text-purple-500 hover:text-purple-600">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {sampleFreelancers.map((freelancer) => (
              <motion.div
                key={freelancer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FreelancerCard {...freelancer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Create Your Profile',
                description:
                  'Sign up and showcase your skills, experience, and portfolio to stand out.',
                icon: '1',
              },
              {
                title: 'Find Opportunities',
                description:
                  'Browse through various projects and gigs that match your expertise.',
                icon: '2',
              },
              {
                title: 'Get Hired & Earn',
                description:
                  'Connect with clients, deliver quality work, and grow your career.',
                icon: '3',
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};