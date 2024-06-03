import {ReactElement, ReactNode} from 'react';

import type {Metadata} from 'next';
import {Quicksand} from 'next/font/google';

import './globals.scss';

const quicksand = Quicksand({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'The Ultimate Authentication Guide',
    description: 'The Ultimate Authentication Guide by BijanProgrammer',
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>): ReactElement {
    return (
        <html lang="en">
            <body className={quicksand.className}>{children}</body>
        </html>
    );
}
