'use client'
import { useState } from 'react'
import EnquireModal from './EnquireModal'

const faqData = {
  'About the Course': [
    {
      q: 'What types of corporate training programs does Accredian offer?',
      a: 'Accredian offers a comprehensive range of corporate training programs including domain-specific certifications, executive education, leadership development, Gen-AI mastery, and technology upskilling. Programs are tailored to your organization\'s specific goals and can be delivered online, offline, or in a blended format.',
    },
    {
      q: 'What domain specializations are available?',
      a: 'We offer specializations across Product & Innovation, Gen-AI & Machine Learning, Leadership & Management, Tech & Data Insights, Operations Excellence, Digital Enterprise transformation, and Fintech Innovation. Each domain has structured learning paths from foundational to advanced levels.',
    },
    {
      q: 'Can programs be customized for our organization?',
      a: 'Absolutely. Every program is co-created with your L&D team to address your specific skill gaps, industry context, and business objectives. We start with a diagnostic assessment and build a learning journey unique to your workforce.',
    },
  ],
  'About the Delivery': [
    {
      q: 'What delivery modes are available?',
      a: 'Accredian provides flexible delivery options including live instructor-led online sessions, self-paced e-learning modules, on-site workshops, and blended hybrid formats. All modes are supported by our state-of-the-art Learning Management System (LMS).',
    },
    {
      q: 'How long does a typical corporate training program run?',
      a: 'Program duration varies by complexity and learning objectives. Short-format topic-specific programs run 1 to 4 weeks, while comprehensive domain certifications can span 3 to 6 months. We design timelines that fit your team\'s bandwidth without disrupting operations.',
    },
    {
      q: 'Who are the trainers and instructors?',
      a: 'All Accredian instructors are industry practitioners with 10+ years of domain expertise. They bring real-world case studies, hands-on projects, and current industry trends directly into every session.',
    },
  ],
  'Miscellaneous': [
    {
      q: 'How does Accredian measure the ROI of training?',
      a: 'We use a multi-level evaluation framework that tracks learner engagement, knowledge retention, skill application on the job, and business impact metrics. You receive detailed progress reports and post-program assessments to quantify the value delivered.',
    },
    {
      q: 'Do participants receive certificates upon completion?',
      a: 'Yes. All participants who complete the program receive Accredian certificates, which are recognized by leading organizations across industries. Certificates can be shared on LinkedIn and professional networks.',
    },
    {
      q: 'What is the minimum team size for corporate training?',
      a: 'We work with teams of all sizes. There is no strict minimum, but our enterprise programs are best optimized for cohorts of 15 or more participants to maximize peer learning and discussion quality.',
    },
  ],
}

const tabs = Object.keys(faqData)

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [openIndex, setOpenIndex] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs — desktop: vertical | mobile: horizontal scroll */}
            <div className="md:w-56 flex-shrink-0">
              <div className="flex md:flex-col gap-2 overflow-x-auto pb-1 md:pb-0 md:overflow-visible">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setOpenIndex(null) }}
                    className={`flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium text-left transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? 'text-blue-600 shadow-md bg-white border border-gray-100'
                        : 'text-gray-500 border border-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="flex-1 flex flex-col gap-0 divide-y divide-gray-100">
              {faqData[activeTab].map((item, i) => (
                <div key={i} className="py-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center text-left gap-4"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base">{item.q}</span>
                    <span className="text-gray-400 text-lg flex-shrink-0">
                      {openIndex === i ? '∧' : '∨'}
                    </span>
                  </button>
                  {openIndex === i && (
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enquire Now button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
