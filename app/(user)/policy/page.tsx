// pages/policy.tsx

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
    title: "Policy",
    description: "This is our policy page",
    openGraph: {
        type: "website",
        url: "https://ecommerce.sovanra.me/policy",
        title: "CSTAD Ecommerce - Policy",
        description: "This is our policy page",
        images: "https://www.istad.co/resources/img/CSTAD_120.png",
    },
};

const PolicyPage: NextPage = () => (
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
        <h1 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-10'>Our Policies</h1>
        <ul className='list-disc pl-5'>
            <li className='mt-10'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Return Policy</h2>
                <p className='leading-7'>We offer a 30-day return policy for all our products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund. Please note that the product must be in its original condition and packaging.</p>
            </li>
            <li className='mt-10'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Shipping Policy</h2>
                <p className='leading-7'>We offer free shipping on all orders over $50. Orders are typically processed within 1-2 business days and delivered within 5-7 business days. Please note that delivery times may vary depending on your location.</p>
            </li>
            <li className='mt-10'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Privacy Policy</h2>
                <p className='leading-7'>We value your privacy and are committed to protecting your personal information. We only collect information necessary to process your order and do not share this information with any third parties.</p>
            </li>
            <li className='mt-10'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Terms of Service</h2>
                <p className='leading-7'>By using our services, you agree to our terms of service. We reserve the right to change these terms at any time, so please review them regularly.</p>
            </li>
            <li className='mt-10'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>FAQs</h2>
                <p className='leading-7'>If you have any questions about our policies, please check our FAQs or contact our customer service team.</p>
            </li>
        </ul>
    </main>
);

export default PolicyPage;
