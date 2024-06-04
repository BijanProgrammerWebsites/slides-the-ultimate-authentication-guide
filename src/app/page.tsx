import {ReactElement} from 'react';

import CoverSlide from '@/slides/cover/cover.slide';
import TableOfContentsSlide from '@/slides/table-of-contents/table-of-contents.slide';

import AuthenticationVsAuthorizationChapter from '@/chapter/authentication-vs-authorization/authentication-vs-authorization.chapter';

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
            <AuthenticationVsAuthorizationChapter />
        </>
    );
}
