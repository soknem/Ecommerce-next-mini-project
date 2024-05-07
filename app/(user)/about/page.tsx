// pages/about.tsx

import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

interface OpenGraph {
    type: string;
    url: string;
    title: string;
    description: string;
    images: string;
}

interface Metadata {
    title: string;
    description: string;
    openGraph: OpenGraph;
}

const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about CSTAD Ecommerce and our mission.",
    openGraph: {
        type: "website",
        url: "",
        title: "CSTAD Ecommerce - About Us",
        description: "Learn more about CSTAD Ecommerce and our mission.",
        images: "https://www.istad.co/resources/img/CSTAD_120.png",
    },
};

const AboutPage: NextPage = () => (
    <main className='container mx-auto mt-20 px-4 sm:px-6 lg:px-8'>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:image" content={metadata.openGraph.images} />
        </Head>
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">About Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">CSTAD Ecommerce is dedicated to providing high-quality products and exceptional customer service. Our mission is to make online shopping a seamless and enjoyable experience for our customers.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Quality Products</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We source the finest materials to ensure our products meet the highest standards of quality and durability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <path d="M12 14c-4.97 0-9 2.69-9 6v1h18v-1c0-3.31-4.03-6-9-6z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Exceptional Service</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Our dedicated team is committed to providing personalized assistance and support to our customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Seamless Experience</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We strive to create a seamless and enjoyable shopping experience through user-friendly interfaces and fast, reliable service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default AboutPage;
