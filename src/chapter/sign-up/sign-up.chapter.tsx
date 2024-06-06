import {ReactElement} from 'react';

import encryptionDecryptionImage from '@/assets/images/sign-up/encryption-decryption.webp';
import hashingImage from '@/assets/images/sign-up/hashing.webp';
import hashingAndHackerImage from '@/assets/images/sign-up/hashing-and-hacker.webp';
import hashingAndRainbowTableImage from '@/assets/images/sign-up/hashing-and-rainbow-table.webp';
import rawPasswordsImage from '@/assets/images/sign-up/raw-passwords.webp';
import rawPasswordsAndHackerImage from '@/assets/images/sign-up/raw-passwords-and-hacker.webp';
import saltImage from '@/assets/images/sign-up/salt.webp';

import ImageSlide from '@/slides/image/image.slide';

export default function SignUpChapter(): ReactElement {
    const heading = 'Sign Up' as const;

    return (
        <section>
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={rawPasswordsImage.src}
                caption="Raw Passwords"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={rawPasswordsAndHackerImage.src}
                caption="Raw Passwords & Hacker"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={encryptionDecryptionImage.src}
                caption="Encryption Decryption"
            />
            <ImageSlide isAutoAnimated={true} heading={heading} imageSrc={hashingImage.src} caption="Hashing" />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={hashingAndHackerImage.src}
                caption="Hashing & Hacker"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={hashingAndRainbowTableImage.src}
                caption="Hashing & Rainbow Table"
            />
            <ImageSlide isAutoAnimated={true} heading={heading} imageSrc={saltImage.src} caption="Salt" />
        </section>
    );
}
