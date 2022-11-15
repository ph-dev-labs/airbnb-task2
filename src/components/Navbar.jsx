import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Modal from "../pages/Modal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Place to stay", href: "/place-to-stay" },
  { name: "NFTs", href: "/" },
  { name: "Community", href: "/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  let navigate = useNavigate();

  return (
    <div className="xsx:m-9 xsx:p-0 px-6 mx-12 pt-12 lg:px-8 ">
      {/* fixed top-0 z-50 w-full bg-white p-3 */}
      <div className="">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* md:w-[180px] lg:w-[200px] */}
              <img className="h-8" src="images/logo-1.svg" alt="brand" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 whitespace-nowrap">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  navigate(item.href);
                }}
                className="font-normal text-base text-tinytext hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-primary rounded-lg px-6 py-2.5 text-sm font-normal leading-6 text-white hover:transition duration-700 ease-in-out"
            >
              Connect wallet
            </button>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8"
                    src="images/logo-1.svg"
                    alt="brand-logo"
                  />
                </a>
              </div>
              <div className="py-6">
                <button
                  onClick={() => setShowModal(true)}
                  className="mdx:w-2/5 mdx:text-center -mx-3 bg-primary px-4 py-2.5 font-normal text-white block rounded-lg text-base leading-6"
                >
                  Connect wallet
                </button>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block font-medium text-tinytext rounded-lg py-2 px-3 text-base leading-7 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>

      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
}
