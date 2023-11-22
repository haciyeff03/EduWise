import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import user from "../../../assets/images/test.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbReceipt } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { SlQuestion } from "react-icons/sl";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardUserDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-[14px]">
          <img src={user} className="w-[36px] h-[36px] object-cover rounded-full" />
          <FiChevronDown className="-mr-1 h-[24px] w-[24px]" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[280px] origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col gap-3 ">
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`flex gap-[10px] items-center ${classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-[16px]")}`}>
                  <IoMdHeartEmpty size={24} />
                  Wishlists
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`flex gap-[10px] items-center ${classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-[16px]")}`}>
                  <TbReceipt size={24} />
                  Purchase history
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`flex gap-[10px] items-center ${classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-[16px]")}`}>
                  <GoPerson size={24} />
                  Edit profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`flex gap-[10px] items-center ${classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-[16px]")}`}>
                  <IoSettingsOutline size={24} />
                  Account Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`flex gap-[10px] items-center ${classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-[16px]")}`}>
                  <SlQuestion size={24} />
                  Support
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button type="submit" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-[16px] flex items-center gap-[10px]")}>
                    <RiLogoutCircleLine size={24} />
                    Log out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
