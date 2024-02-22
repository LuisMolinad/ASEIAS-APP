import Navbar from "@/Layouts/PublicLayout/Navbar";
import React from "react";

function Show() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-800">
            <Navbar
                className="bg-white border-b border-gray-100"
                logoUrl=""
                logoText=""
                links={[
                    {
                        href: route("dashboard"),
                        text: "Texto",
                        active: route().current("dashboard"),
                    },
                    {
                        href: route("dashboard"),
                        text: "Dashboard",
                        active: route().current("dashboard"),
                    },
                    {
                        href: route("dashboard"),
                        text: "Dashboard",
                        active: route().current("dashboard"),
                    },
                    {
                        href: route("dashboard"),
                        text: "Dashboard",
                        active: route().current("dashboard"),
                    },
                    // Add more links as needed
                ]}
                dropdownContent={[
                    { href: route("profile.edit"), text: "Profile" },
                    {
                        href: route("logout"),
                        text: "Log Out",
                        method: "post",
                        as: "button",
                    },
                    // Add more dropdown content as needed
                ]}
            />
            <main></main>
        </div>
    );
}

export default Show;
