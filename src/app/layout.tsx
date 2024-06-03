import {ReactElement, ReactNode} from 'react';

import type {Metadata} from 'next';
import {Quicksand} from 'next/font/google';

import RevealProvider from '@/providers/reveal.provider';

import './globals.scss';
import './reveal.css';

const quicksand = Quicksand({subsets: ['latin'], variable: '--font-quicksand'});

export const metadata: Metadata = {
    title: 'The Ultimate Authentication Guide',
    description: 'The Ultimate Authentication Guide by BijanProgrammer',
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>): ReactElement {
    return (
        <html lang="en" className={quicksand.variable}>
            <body>
                <RevealProvider>{children}</RevealProvider>
            </body>
        </html>
    );
}
