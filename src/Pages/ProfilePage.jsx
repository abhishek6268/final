import React from "react";
import bg from "../assets/good-food-home-strip-phone.jpg";
const ProfilePage = () => {
  return (
    <section className="relative pt-40 pb-24 bg-gray-100">
      {/*  cover bg */}
      <img
        src={bg}
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-60"
      />
      {/* profile section  */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-around">
        <div className="flex flex-col items-center justify-center sm:justify-start relative z-10 mb-5">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="border-4 border-solid border-white rounded-full"
          />
          <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
                Emma Smith
              </h3>
              <p className="font-normal text-base leading-7 text-gray-500">
                Los Anbeles, California
              </p>
            </div>
          </div>
          {/*  user navigation buttons */}
          <div className="flex items-center gap-4">
            <button className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">
              Edit Profile
            </button>
            <button className="py-3.5 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100">
              Settings
            </button>
          </div>
          {/*  user details section starts here  */}
          <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mt-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and informations about user.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Full name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Mickael Poulaz
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Phone No</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    1234567890
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Gender</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Male
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    m.poul@example.com
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Adress line 1
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Xyz street near street landmark India Mp
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Adress line 2
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Xyz street near street landmark India Mp
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">PinCode</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    452010
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
