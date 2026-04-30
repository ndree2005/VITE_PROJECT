import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Sidebar, UserRound } from "lucide-react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/img/chicken.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Course", href: "/course" },
  { name: "Calendar", href: "/calendar" },
];

const sidebar = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Courses", href: "/course", icon: BookOpen },
  { name: "Profile", href: "/profile", icon: UserRound },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Drawers() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`fixed top-16 h-[calc(100vh-64px)] bg-gray-700 border-r border-gray-700 transition-all duration-300 z-40 flex flex-col ${
          isSidebarOpen ? "w-64" : "w-0 pointer-events-none"
        } overflow-hidden`}
      >
        <nav className="mt-6 space-y-2 px-3 overflow-y-auto flex-1">
          {sidebar.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? "bg-white/12 text-white shadow-lg shadow-black/20"
                    : "text-gray-300 hover:bg-white/10 hover:text-white hover:shadow-lg",
                  "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200",
                )}
                title={!isSidebarOpen ? item.name : ""}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isSidebarOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-700 bg-black/30 shrink-0">
          {isSidebarOpen && (
            <p className="text-xs text-gray-400">(c) 2024 Learning Platform</p>
          )}
        </div>
      </div>

      {/* NAVBAR */}

      <Disclosure
        as="nav"
        className="sticky top-0 z-50 bg-gray-800 p-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center gap-2">
                {/* BUTTON SIDEBAR */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-md text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  {isSidebarOpen ? (
                    <Sidebar className="size-6" />
                  ) : (
                    <Bars3Icon className="size-6" />
                  )}
                </button>

                {/* LOGO */}
                <img alt="logo" src={Logo} className="h-9 w-auto rounded-lg" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={
                        location.pathname === item.href ? "page" : undefined
                      }
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-gray-950/50 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      Your profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/sign-in"
                      className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      sign in
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {
                        /* handle sign out */
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={
                  location.pathname === item.href ? "page" : undefined
                }
                className={classNames(
                  location.pathname === item.href
                    ? "bg-gray-950/50 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
