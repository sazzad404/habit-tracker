import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:pr-4">
            <a
              href="#"
              className="flex items-center rounded outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2"
            >
              <img
                className="w-auto h-8"
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="HabitTracker Logo"
              />
              <span className="ml-2 text-xl font-bold text-indigo-700">
                HabitTracker
              </span>
            </a>
            <p className="text-gray-400 text-base leading-relaxed mt-2">
              Build better habits, stay consistent, and visualize your progress
              every day. HabitTrackr helps you stay on track and achieve your
              goals with ease.
            </p>

            <ul className="flex items-center space-x-3 mt-7">
              {[
                "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461...",
                "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56...",
                "M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248z...",
                "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465...",
              ].map((d, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={d}></path>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-400">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {["About Us", "How It Works", "Pricing", "Testimonials"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-400">
              Resources
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Blog & Tips",
                "Habit Building Guide",
                "Community Forum",
                "FAQs",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:pl-4">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-400">
              Stay Updated
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Join our newsletter to get weekly motivation, productivity tips,
              and new habit ideas straight to your inbox.
            </p>
            <form className="mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full mt-3 py-3 bg-green-600 rounded-md text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-10 border-gray-700" />
        <p className="text-center text-gray-500 text-sm mt-5">
          © 2025 HabitTrackr. Build habits. Transform your life.
        </p>
      </div>
    </section>
  );
};

export default Footer;
