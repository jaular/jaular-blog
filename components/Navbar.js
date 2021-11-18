import Link from "next/link";
import ButtonTheme from "@/components/ButtonTheme";
import { Disclosure } from "@headlessui/react";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ navigation }) {
  return (
    <Disclosure as="nav" className="bg-gray-200 dark:bg-black-400 ">
      {({ open }) => (
        <>
          <div className="max-w-3xl px-6 mx-auto lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-700 bg-gray-300 rounded-md dark:text-gray-400 hover:text-black-500 dark:hover:text-white dark:bg-black-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt4Icon
                      className="block w-6 h-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? "bg-gray-300 dark:bg-black-300 text-black-500 dark:text-white"
                              : "text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-black-300",
                            "px-4 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ButtonTheme />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-6 pt-2 pb-8 space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className="block py-4 text-sm font-medium border-b border-gray-300 text-black-500 dark:text-white dark:border-black-100"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
