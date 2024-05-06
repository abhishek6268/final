import React from "react";

const OurStory = () => {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div class="flex items-center justify-center flex-col gap-5 mb-14">
          <span class="bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
            Portfolio
          </span>
          <h2 class="font-manrope font-bold text-4xl text-gray-900 text-center">
            Structural Elegance
          </h2>
          <p class="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
            {" "}
            In the world of architecture or organization, structure provides the
            backbone for a purposeful and harmonious existence.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
          <div
            class="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6"
            style={{
              backgroundImage:
                "url('https://pagedone.io/asset/uploads/1707713043.png')",
            }}
          >
            <h6 class="font-medium text-xl leading-8 text-white mb-4">
              Architecture Designer
            </h6>
            <p class="text-base font-normal text-white/70">
              where knowledge meets innovation, and success is sculpted through
              a blend of skill and vision.
            </p>
          </div>
          <div class="block">
            <img
              src="https://pagedone.io/asset/uploads/1707713007.png"
              alt="Building structure image"
              class="w-full"
            />
          </div>
          <div class="block">
            <img
              src="https://pagedone.io/asset/uploads/1707713018.png"
              alt="Building structure image"
              class="w-full"
            />
          </div>
          <div class="block">
            <img
              src="https://pagedone.io/asset/uploads/1707713032.png"
              alt="Building structure image"
              class="w-full"
            />
          </div>
          <div
            class=" bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6"
            style={{
              backgroundImage:
                "url('https://pagedone.io/asset/uploads/1707713043.png')",
            }}
          >
            <h6 class="font-medium text-xl leading-8 text-white mb-4">
              Interior Designer
            </h6>
            <p class="text-base font-normal text-white/70">
              Crafting exceptional interiors, where aesthetics meet
              functionality for spaces that inspire and elevate.
            </p>
          </div>
          <div class="block">
            <img
              src="	https://pagedone.io/asset/uploads/1707713055.png"
              alt="Building structure image"
              class="w-full"
            />
          </div>
          <div
            class=" bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6"
            style={{
              backgroundImage:
                "url('https://pagedone.io/asset/uploads/1707713043.png')",
            }}
          >
            <h6 class="font-medium text-xl leading-8 text-white mb-4">
              Business Building
            </h6>
            <p class="text-base font-normal text-white/70">
              Architecting business success through innovation, resilience, and
              strategic leadership.
            </p>
          </div>
        </div>
        <button class="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600">
          Load More
        </button>
      </div>
    </section>
  );
};

export default OurStory;
