import React, { useEffect, useState } from "react";
import {Collapse,  initTE,} from "tw-elements";

function FAQs() {
    useEffect(() => {
        initTE({ Collapse });
      }, []);
    const [isAccordionVisible, setIsAccordionVisible] = useState(false);
    const toggleAccordion = () => {
        setIsAccordionVisible(!isAccordionVisible);
      };
  return (
    <div  className="bg-gray-50">
    <p className="py-5 text-center text-lg">Have a Question?<span className="ml-5 underline cursor-pointer" id="faq" onClick={toggleAccordion}>See Our FAQs</span></p>
    <div id="accordionFlushExample" className={`max-w-[1000px] mx-auto font-bold pb-6 px-4 ${isAccordionVisible ? "" : "hidden"}`}>
      <div
        className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mb-4 ">
        <h2 className="mb-0" id="flush-headingOne">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne">
            <p><span className="mr-4 inline-block">Question:</span>How long does Bug Bulb’s battery last for?</p>
            <span
              className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="!visible border-0"
          data-te-collapse-item
          data-te-collapse-show
          aria-labelledby="flush-headingOne"
          data-te-parent="#accordionFlushExample">
          <div className="px-5 py-4 border-t">
          <span className="font-normal ">Yes! The automatic rechargeable battery will make sure your Bug Bulb zaps for 16 hours and lights up for 20 hours!</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mb-4">
        <h2 className="mb-0" id="flush-headingTwo">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo">
            <p><span className="mr-4 inline-block">Question:</span>Is Bug Bulb waterproof?</p>
            <span
              className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="!visible hidden border-0"
          data-te-collapse-item
          aria-labelledby="flush-headingTwo"
          data-te-parent="#accordionFlushExample">
          <div className="px-5 py-4 border-t">
          <span className="font-normal ">Definitely. Bug Bulb has an IPX6 waterproof rating. It can withstand whatever conditions you need it in!</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mb-4">
        <h2 className="mb-0" id="flush-headingThree">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree">
            <p><span className="mr-4 inline-block">Question:</span>How do I recharge Bug Bulb?</p>
            <span
              className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="flush-headingThree"
          data-te-parent="#accordionFlushExample">
          <div className="px-5 py-4 border-t">
          <span className="font-normal ">Bug Bulb can be recharged using any USB port, and also comes with its own wall charger adapter.</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mb-4">
        <h2 className="mb-0" id="flush-headingFour">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour">
            <p><span className="mr-4 inline-block">Question:</span>Can I have the light and the zapper on at the same time?</p>
            <span
              className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="flush-headingFour"
          data-te-parent="#accordionFlushExample">
          <div className="px-5 py-4 border-t">
          <span className="font-normal ">You sure can! You can have the light on, the zapper on, or both on at the same time.</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mb-4">
        <h2 className="mb-0" id="flush-headingFive">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive">
            <p><span className="mr-4 inline-block">Question:</span>Is the Bug Bulb safe for children and pets?</p>
            <span
              className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="flush-headingFive"
          data-te-parent="#accordionFlushExample">
          <div className="px-5 py-4 border-t">
          <span className="font-normal ">Unlike chemicals, coils, and other types of lanterns, Bug Bulb is completely safe for children and pets.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FAQs