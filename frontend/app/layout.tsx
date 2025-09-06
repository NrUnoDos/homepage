import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "PDF Tool",
    description: "Personal Website & Tools",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body className="min-h screen flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-center gap-6 text-sm text-gray-700">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/impressum" className="hover:underline">Impressum</Link>
            </div>
        </footer>
        </body>
        </html>
    );
}
