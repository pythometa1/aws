import React from "react";

const Testimonial = () => {
  return (
    <div className="container items-center md:mt-[5rem] xl:mt-[12rem] xxl:mt-[-27rem] lg:mt-[-10rem] sm:mt-12 ssm:mt-12 xsm:mt-[-9rem] my-24 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="text-center xl:mt-[12rem] mt-32 container">
        <h2 className="mb-[1rem] pb-[4rem] text-center text-3xl font-bold">
          Testimonials:-
        </h2>

        <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0 ">
            <div className="relative block rounded-2xl bg-blue-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex"></div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">
                  Prakash Agro (Pradeep)
                </h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  water purifier{" "}
                </h6>
                <ul className="mb-6 flex justify-center">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p>
                  I have taken service from pestokiller for my packaged drinking
                  water factory. They firstly professionally inspected the pest
                  and causes of pest in my factory. Then the performed the
                  lizard and spider control service. This service was too
                  effective and my premises is now free from any pest. And in
                  too affordable price. Highly recommended Thank you Pestokiller
                  and team!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-2xl bg-yellow-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex"></div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Avishkar kakde</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Software Developer
                </h6>
                <ul className="mb-6 flex justify-center">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p>
                  I have taken recently service from pestokiller for my hostel
                  they provide huge discount independent sale that ongoing on
                  their website. It's worth I will suggest best service in peth
                  area for bedbug.This service proved highly effective, leaving
                  my premises completely pest-free, all at a remarkably
                  affordable price.Best Pestcontrol service in Pune.. Good
                  Quality.They are always on time.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <div className="relative block rounded-2xl bg-red-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex"></div>
              <div className="p-6 ">
                <h5 className="mb-2 text-lg font-bold">Gayatri Shirsath</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Local Guide
                </h6>
                <ul className="mb-6 flex justify-center">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p>
                  There service was great. It was worth of money. And For first
                  customer they provide special discounts. Do contact them. Fast
                  service and very flexible service it is worth it. It's really
                  good service.Best company for termites treatment firstly
                  professionally analysis the problem provided quotation after
                  explanation they started treatment drill the wall put
                  chemicals with in it and spray chemical in my premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;