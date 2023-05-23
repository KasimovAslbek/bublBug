import React, { useState } from "react";

function FAQs() {
  const [activeAccordionId, setActiveAccordionId] = useState(null);
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);
  const toggleAccordionMain = () => {
    setIsAccordionVisible(!isAccordionVisible);
  };
  const toggleAccordion = (id) => {
    setActiveAccordionId(id === activeAccordionId ? null : id);
  };

  const questions = [
    {
      id: 1,
      question: "How long does Bug Bulb’s battery last for?",
      answer: "Yes! The automatic rechargeable battery will make sure your Bug Bulb zaps for 16 hours and lights up for 20 hours!",
    },
    {
      id: 2,
      question: "Is Bug Bulb waterproof?",
      answer: "Definitely. Bug Bulb has an IPX6 waterproof rating. It can withstand whatever conditions you need it in!",
    },
    {
      id: 3,
      question: "How do I recharge Bug Bulb?",
      answer: "Bug Bulb can be recharged using any USB port, and also comes with its own wall charger adapter.",
    },
    {
      id: 4,
      question: "Can I have the light and the zapper on at the same time?",
      answer: "You sure can! You can have the light on, the zapper on, or both on at the same time.",
    },
    {
      id: 5,
      question: "Is the Bug Bulb safe for children and pets?",
      answer: "Yes, the Bug Bulb is safe for children and pets.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <p className="py-5 text-center text-lg">Have a Question?<span className="ml-5 underline cursor-pointer" id="faq" onClick={toggleAccordionMain}>See Our FAQs</span></p>
      <div id="accordionFlushExample" className={`max-w-[1000px] mx-auto font-bold pb-6 px-4 ${isAccordionVisible ? "" : "hidden"}`}>
        {questions.map((item) => (
          <div
            key={item.id}
            className={`rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mb-4`}
          >
            <h2 className="mb-0" id={`flush-heading-${item.id}`}>
              <button
                className={`group relative flex justify-between w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={item.id === activeAccordionId}
                aria-controls={`flush-collapse-${item.id}`}
              >
                <div className="flex-grow-1">{item.question}</div>
                <svg
                  className={`ml-4 h-5 w-5 text-neutral-500 group-hover:text-primary dark:text-white flex ${
                    item.id === activeAccordionId ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </h2>
            {item.id === activeAccordionId && (
              <div
                id={`flush-collapse-${item.id}`}
                className="transition-all duration-500"
              >
                <div className="">
                  <p className="text-base text-neutral-700 dark:text-neutral-300 p-4  border-t s font-normal">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;