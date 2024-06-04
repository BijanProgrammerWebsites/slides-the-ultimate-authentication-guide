import {ReactElement} from 'react';

import authenticationImage from '@/assets/images/authentication-vs-authorization/authentication.webp';
import authorizationImage from '@/assets/images/authentication-vs-authorization/authorization.webp';

import CoverSlide from '@/slides/cover/cover.slide';
import TableOfContentsSlide from '@/slides/table-of-contents/table-of-contents.slide';
import VersusSlide from '@/slides/versus/versus.slide';

export default function Home(): ReactElement {
    return (
        <>
            <CoverSlide heading="The Ultimate Authentication Guide" basePath="/tuag" />
            <TableOfContentsSlide
                contents={[
                    'Authentication vs Authorization',
                    'Types of Authentication',
                    'RESTful & HTTP',
                    'Sign Up',
                    'Storing User Data',
                    'Cookies',
                    'Using Cookies for Authentication',
                    'Sign In',
                    'Sign Out',
                    'Security Concerns',
                ]}
            />
            <VersusSlide
                heading="Authentication vs Authorization"
                columns={[
                    {
                        heading: 'Authentication',
                        imageSrc: authenticationImage.src,
                        description: 'Verifies the true identity of the user.',
                    },
                    {
                        heading: 'Authorization',
                        imageSrc: authorizationImage.src,
                        description: 'Determines what the user can access.',
                    },
                ]}
            />
        </>
    );
}
