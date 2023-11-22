import bgImage from "/background-img 1.jpg";

export const Card = () => {
  return (
    <div>
      <article className="card bg-gray-200 ">
        <div className="grid lg:grid-cols-2 card sm:p-4 lg:py-0 xl:py-0 xl:grid-cols-5 h-[100vh]">
          <div className="content lg:py-15   lg:pl-10 lg:col-span-1 2xl:col-span-2 xl:col-span-2 ">
            <div className=" max-w-xl lg:max-w-full sm:mx-auto lg:mx-left">
              <div className="brand gap-2 flex lg:mt-20 ">
                <div className="logo h-10 w-10 bg-cyan-600 items-center flex justify-center rounded-full text-[#fff] medium mb-10">
                  ib
                </div>

                <h4 className="text-[30px] text-[#2f5044]">
                  Work<span className="text-cyan-600">station</span>
                </h4>
              </div>
              <div className="card-mg  items-center justify-center lg:mb-10">
                <img
                  className="rounded-xl my-2 shadow-xl lg:hidden h-[280px] object-center w-full
        "
                  src={bgImage}
                  alt="image of computer "
                />
                <div className="myP lg:p-">
                  <h1 className="text-2xl mt-5 font-medium sm:text-2xl xl:text-2xl">
                    Freelance Frontend Developer
                  </h1>
                  <h2 className="sm:text-xl text-cyan-600 lg:text-2xl lg:leading-6 lg:mt-2 xl:text-2xl 2xl:text-2xl">
                    Working from the comfort of home{" "}
                  </h2>

                  <p className="mt-2 text-gray-600 text-sm sm:m-5 lg:text-xl lg:mt-10 xl:text-xl xl:leading-10">
                    Passionate Frontend Developer that is creating beautiful and
                    responsive Website using React, JavaScript, CSS, tailwind
                    and HTML
                  </p>
                </div>

                <div className="mt-4 sm:mt-6">
                  <a href="#" className="btn btn-primary mr-5">
                    {" "}
                    Hire me
                  </a>

                  <a href="#" className="btn btn-secondary">
                    {" "}
                    Hire me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden lg:inline-block lg:col-span-1 relative xl:col-span-3 2xl:col-span-3">
            <img
              className="object-cover object-center absolute w-full h-full inset-0"
              src={bgImage}
              alt="image of computer"
            />
          </div>
        </div>
      </article>
    </div>
  );
};
