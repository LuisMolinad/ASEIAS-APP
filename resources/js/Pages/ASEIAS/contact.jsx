import React from "react";
import PublicLayout from "@/Layouts/PublicLayouts/PublicLayout";
import { Head } from "@inertiajs/react";
function contact() {
    return (
        <PublicLayout
            logoUrl="/path-to-your-logo.png"
            logoText="Your App Name"
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Contactos:
                </h2>
            }
            links={[
                { href: "/aseias/index", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/aseias/contact", text: "Contact" },
            ]}
            dropdownLinks={[
                { href: "/profile/edit", text: "Profile" },
                { href: "/logout", text: "Log Out" },
            ]}
        >
            {/*  Contenido de la página aquí */}
            <Head title="ASEISI Public" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            CONTACTOS
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

export default contact;
