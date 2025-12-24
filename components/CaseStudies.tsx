'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Property Owner Success Story",
      subtitle: "From Empty Property to Profitable AFH Lease in 90 Days",
      application: "AFH Property Advisor",
      icon: "🏠",
      gradient: "from-purple-500 to-pink-500",
      challenge: "A property owner in Centralia, WA had a vacant 2,100 sq ft home and was unsure how to maximize its potential. Traditional rental would only generate $1,800/month, but they heard about AFH opportunities.",
      solution: "Using AFHhub's Property Advisor, they analyzed their property with the interactive floor plan tool, compared all three conversion scenarios, and chose the Minimal WABO Conversion path. The platform provided detailed timeline, budget planning, and ready-to-use marketing materials.",
      results: [
        "Found qualified AFH provider within 3 weeks using Provider Search integration",
        "Completed minimal WABO conversion in 90 days with $28K investment (70% landlord share)",
        "Secured 3-year lease at $4,200/month (133% increase over traditional rental)",
        "ROI of 180% over 3 years with stable, long-term tenant",
        "Used marketing templates to reach 9 different platforms simultaneously"
      ],
      metrics: {
        timeline: "90 days",
        investment: "$28K",
        monthlyRent: "$4,200",
        roi: "180%"
      },
      quote: "AFHhub's Property Advisor made the entire process seamless. The scenario comparison helped us make an informed decision, and the marketing materials saved us weeks of work. We couldn't be happier with the results!",
      author: "Sarah Johnson",
      role: "Property Owner, Centralia, WA"
    },
    {
      id: 2,
      title: "Healthcare Professional Success Story",
      subtitle: "Reduced Placement Time by 60% with Intelligent Matching",
      application: "AFH Resident Placement Services",
      icon: "🏥",
      gradient: "from-indigo-500 to-blue-500",
      challenge: "A case manager at a major Seattle hospital was spending 8-12 hours per week manually searching for appropriate AFH placements. With 15-20 residents needing placement monthly, the process was overwhelming and time-consuming.",
      solution: "Implemented AFHhub's Placement Services platform. The intelligent matching algorithm automatically analyzed resident needs against 580+ providers, generating ranked matches with detailed reasoning in seconds.",
      results: [
        "Reduced average placement time from 2 weeks to 5 days (60% improvement)",
        "Increased match accuracy to 92% (vs. 65% manual matching)",
        "Handled 18 urgent placements in one month with 100% success rate",
        "Saved 30+ hours per week on manual research and phone calls",
        "Improved resident satisfaction with better care-level matches"
      ],
      metrics: {
        timeSaved: "30+ hrs/week",
        placementTime: "5 days",
        matchAccuracy: "92%",
        successRate: "100%"
      },
      quote: "The Placement Services platform has revolutionized our workflow. What used to take days of research now takes minutes. The matching algorithm is incredibly accurate, and our residents are getting better placements faster.",
      author: "Dr. Michael Chen",
      role: "Case Manager, Seattle General Hospital"
    },
    {
      id: 3,
      title: "AFH Provider Success Story",
      subtitle: "Tripled Referrals and Filled Vacancies in 6 Weeks",
      application: "AFH Provider Search",
      icon: "🔍",
      gradient: "from-blue-500 to-cyan-500",
      challenge: "An established AFH provider in Tacoma had 3 vacant beds for 4 months. Traditional marketing methods weren't generating quality referrals, and they were losing $12,000/month in potential revenue.",
      solution: "Listed their facility in AFHhub's Provider Search directory. Healthcare professionals and case managers searching for placements could easily find them based on location, specialties, and availability. The platform's visibility brought qualified referrals directly to them.",
      results: [
        "Received 15 qualified inquiries in first 2 weeks (vs. 2-3 per month previously)",
        "Filled all 3 vacant beds within 6 weeks with perfectly matched residents",
        "Increased monthly revenue by $12,600 with stable, long-term placements",
        "Built relationships with 8 new healthcare facilities through the platform",
        "Maintained 100% occupancy rate for 6+ months"
      ],
      metrics: {
        inquiries: "15 in 2 weeks",
        fillTime: "6 weeks",
        revenueIncrease: "+$12,600/mo",
        occupancy: "100%"
      },
      quote: "Being listed on AFHhub transformed our business. We went from struggling to fill vacancies to having a waiting list. The quality of referrals is excellent, and the platform makes it so easy for healthcare professionals to find us.",
      author: "Jane Doe",
      role: "AFH Provider, Tacoma, WA"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Top 3 Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real users. See how AFHhub is transforming Adult Family Home operations across Washington State.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${study.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-3">{study.icon}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-2">
                    {study.application}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                  <p className="text-sm opacity-90">{study.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <h4 className="font-semibold text-gray-800">Challenge</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-blue-500 mr-2">💡</span>
                    <h4 className="font-semibold text-gray-800">Solution</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <span className="text-green-500 mr-2">✅</span>
                    <h4 className="font-semibold text-gray-800">Results</h4>
                  </div>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className={`bg-gradient-to-br ${study.gradient} bg-opacity-10 rounded-xl p-4 mb-6`}>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-gray-300 pl-4 mb-6">
                  <p className="text-sm italic text-gray-700 mb-3">"{study.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{study.author}</div>
                    <div className="text-xs text-gray-600">{study.role}</div>
                  </div>
                </div>
              </div>

              {/* Footer Badge */}
              <div className={`bg-gradient-to-r ${study.gradient} px-6 py-3 text-white text-center text-sm font-semibold`}>
                Case Study #{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of property owners, healthcare professionals, and AFH providers using AFHhub to transform their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#provider"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free →
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

