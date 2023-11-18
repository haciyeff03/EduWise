import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../../assets/images/edu-wise.svg";

const MobileNavbar = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-[100] overflow-hidden" onClose={setOpen}>
        <div className="flex items-center justify-start min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-[20rem] h-[100vh] w-full bg-white p-[30px]">
              <Link to="/" onClick={closeMenu}>
                <img src={logo} className="mb-5" />
              </Link>
              <nav className="flex flex-col">
                <ul className="flex flex-col gap-3 pl-[0]">
                  <li>
                    <Link to="/courses" onClick={closeMenu} className="text-black">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link to="/professions" onClick={closeMenu} className="text-black">
                      Professions
                    </Link>
                  </li>
                  <li>
                    <Link to="/plans" onClick={closeMenu} className="text-black">
                      Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu} className="text-black">
                      Chat GPT
                    </Link>
                  </li>
                </ul>
                <div className="mt-4">
                  <button onClick={closeMenu} className="bg-[#564FFD] text-white rounded-[2px] px-[16px] py-[8px]">
                    Daxil ol
                  </button>
                </div>
              </nav>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNavbar;
