import React from "react";
import { motion } from "framer-motion";

const HabitPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "per month",
      features: [
        "Track 3 habits",
        "Basic reminders",
        "Progress charts",
        "Community support",
      ],
      popular: false,
    },
    {
      name: "Beginner",
      price: "$9",
      period: "per month",
      features: [
        "Track 10 habits",
        "Custom reminders",
        "Weekly insights",
        "Habit streaks",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      features: [
        "Track unlimited habits",
        "Advanced analytics",
        "Daily reminders",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Expert",
      price: "$49",
      period: "per month",
      features: [
        "Track unlimited habits",
        "Team collaboration",
        "Goal setting templates",
        "1-on-1 coaching",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl font-pj">
            Habit Plans
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Choose a plan that fits your habit tracking needs and reach your
            goals faster.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${
                plan.popular ? "bg-blue-600 text-white" : "bg-gray-50"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-yellow-400 text-black rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-extrabold">
                {plan.price}
                <span className="text-base font-medium">/{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      className={`w-5 h-5 ${
                        plan.popular ? "text-white" : "text-blue-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full justify-center px-4 py-2 font-semibold rounded-md transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HabitPlans;
