import PublicLayout from "@/Layouts/PublicLayout/PublicNavbar";
import Navbar from "@/Layouts/PublicLayout/PublicNavbar";
import React from "react";
import { Head } from "@inertiajs/react";

function Show() {
    /*  return <GuestLayout></GuestLayout>; */
    return (
        <PublicLayout
            logoUrl="/path-to-your-logo.png"
            logoText="Your App Name"
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Public
                </h2>
            }
            links={[
                { href: "/", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/contact", text: "Contact" },
            ]}
            dropdownLinks={[
                { href: "/profile/edit", text: "Profile" },
                { href: "/logout", text: "Log Out" },
            ]}
        >
            {/* Contenido de la página aquí */}
            <Head title="ASEIAS" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Bienvenido a ASEIAS
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

export default Show;
