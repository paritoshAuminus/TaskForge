import { useState, useRef, useEffect } from "react";
import {
    FiSearch,
    FiChevronDown,
    FiBell,
    FiPlus,
    FiUser,
} from "react-icons/fi";

export default function Header() {
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const projectsRef = useRef(null);
    const notificationsRef = useRef(null);
    const profileRef = useRef(null);

    const closeAll = () => {
        setProjectsOpen(false);
        setNotificationsOpen(false);
        setProfileOpen(false);
    };

    const toggleProjects = () => {
        setProjectsOpen((v) => !v);
        setNotificationsOpen(false);
        setProfileOpen(false);
    };

    const toggleNotifications = () => {
        setNotificationsOpen((v) => !v);
        setProjectsOpen(false);
        setProfileOpen(false);
    };

    const toggleProfile = () => {
        setProfileOpen((v) => !v);
        setProjectsOpen(false);
        setNotificationsOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                projectsRef.current?.contains(e.target) ||
                notificationsRef.current?.contains(e.target) ||
                profileRef.current?.contains(e.target)
            ) {
                return;
            }
            closeAll();
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-(--border-primary) bg-(--surface-card)">
            <div className="flex h-14 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-(--accent-primary) font-bold text-(--text-primary)">
                        TF
                    </div>
                    <span className="hidden text-sm font-semibold text-(--text-primary) md:block">
                        TaskForge
                    </span>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Search + Project Switcher */}
                    <div className="relative hidden sm:block">
                        <div className="flex items-center overflow-hidden rounded-md border border-(--border-primary) bg-(--bg-canvas)">
                            <div className="flex items-center gap-2 px-3 text-(--text-muted)">
                                <FiSearch size={16} />
                                <input
                                    type="text"
                                    placeholder="Search issues…"
                                    className="w-40 p-2 bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-muted) md:w-56"
                                />
                            </div>

                            <button
                                onClick={toggleProjects}
                                className="flex items-center gap-1 border-l border-(--border-primary) px-2 text-xs text-(--text-muted) hover:bg-(--surface-hover)"
                            >
                                Projects
                                <FiChevronDown size={14} />
                            </button>
                        </div>

                        {projectsOpen && (
                            <div className="absolute right-0 top-12 w-72 rounded-md border border-(--border-primary) bg-(--surface-card) shadow-lg">
                                <ul className="py-1 text-sm">
                                    {["TaskForge Core", "Website", "Mobile App"].map((project) => (
                                        <li
                                            key={project}
                                            className="cursor-pointer px-3 py-2 text-(--text-primary) hover:bg-(--surface-hover)"
                                        >
                                            {project}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={toggleNotifications}
                            className="rounded-md p-2 text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text-primary)"
                        >
                            <FiBell size={18} />
                        </button>

                        {notificationsOpen && (
                            <div className="absolute right-0 top-12 w-72 rounded-md border border-(--border-primary) bg-(--surface-card) shadow-lg">
                                <div className="border-b border-(--border-primary) px-3 py-2 text-sm font-medium text-(--text-primary)">
                                    Notifications
                                </div>
                                <ul className="max-h-64 overflow-auto text-sm">
                                    <li className="px-3 py-2 text-(--text-secondary) hover:bg-(--surface-hover)">
                                        🔔 TF-24 moved to Done
                                    </li>
                                    <li className="px-3 py-2 text-(--text-secondary) hover:bg-(--surface-hover)">
                                        💬 New comment on TF-18
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Profile */}
                    <div className="relative">
                        <button
                            onClick={toggleProfile}
                            className="flex items-center gap-1 rounded-md p-2 text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text-primary)"
                        >
                            <FiUser size={18} />
                            <FiChevronDown size={14} className="hidden md:block" />
                        </button>

                        {profileOpen && (
                            <div className="absolute right-0 top-12 w-40 rounded-md border border-(--border-primary) bg-(--surface-card) shadow-lg">
                                <ul className="py-1 text-sm">
                                    <li className="px-3 py-2 hover:bg-(--surface-hover)">Profile</li>
                                    <li className="px-3 py-2 hover:bg-(--surface-hover)">Settings</li>
                                    <li className="px-3 py-2 text-red-500 hover:bg-(--surface-hover)">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Quick Add */}
                    <button className="flex items-center gap-1 rounded-md bg-(--accent-primary) px-3 py-2 text-sm font-medium text-(--text-primary) hover:bg-(--accent-hover)">
                        <FiPlus size={16} />
                        <span className="hidden md:block">New</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
