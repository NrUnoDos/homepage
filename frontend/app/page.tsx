'use client';

import {useState} from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState('merge');
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex gap-2 w-full border-b border-gray-200">
                <button
                    className={`px-4 py-2 ${activeTab === 'merge' ? 'border-b-2 border-gray-800' : ''}`}
                    onClick={() => setActiveTab('merge')}
                >
                    PDF zusammenfügen
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'jpgtopdf' ? 'border-b-2 border-gray-800' : ''}`}
                    onClick={() => setActiveTab('jpgtopdf')}
                >
                    JPG zu PDF
                </button>
            </div>
            {activeTab === 'merge' && (
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <p className="text-lg mb-4">Laden Sie hier PDF&apos;s hoch, die Sie miteinander zusammenfügen
                        wollen.</p>
                    <p className="text-sm mb-6">Tipp: STRG gedrückt halten, um mehrere Dateien auszuwählen.</p>
                    <form
                        action="/api/merge"
                        method="post"
                        encType="multipart/form-data"
                        target="_blank"
                        className="w-full max-w-md"
                    >
                        <div className="label-div flex flex-col gap-2">
                            <input
                                type="file"
                                name="files"
                                multiple
                                accept=".pdf"
                                className="fileinput block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                data-multiple-caption="{count} Files selected"
                            />
                            <label className="my-1">Laden Sie Ihre Dateien hier hoch.</label>
                            <button
                                type="submit"
                                className="btn btn-outline-dark my-2 px-4 py-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors"
                            >
                                Umwandeln
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {activeTab === 'jpgtopdf' && (
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <p className="text-lg mb-4">Wählen Sie JPG Dateien aus, die Sie in PDF umwandeln möchten.</p>
                    <p className="text-sm mb-6">Tipp: STRG gedrückt halten, um mehrere Dateien auszuwählen.</p>
                    <form
                        action="/api/jpgpdf"
                        method="post"
                        encType="multipart/form-data"
                        target="_blank"
                        className="w-full max-w-md"
                    >
                        <div className="label-div flex flex-col gap-2">
                            <input
                                type="file"
                                name="files"
                                multiple
                                accept=".jpg,.jpeg"
                                className="fileinput block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                data-multiple-caption="{count} Files selected"
                            />
                            <label className="my-1">Laden Sie Ihre Dateien hier hoch.</label>
                            <button
                                type="submit"
                                className="btn btn-outline-dark my-2 px-4 py-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors"
                            >
                                Umwandeln
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
