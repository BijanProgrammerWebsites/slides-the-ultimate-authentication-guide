import {ReactElement} from 'react';

import clientCookieImage from '@/assets/images/cookies/client-cookie.webp';
import cookieHeaderImage from '@/assets/images/cookies/cookie-header.webp';
import csrfImage from '@/assets/images/cookies/csrf.webp';
import domainImage from '@/assets/images/cookies/domain.webp';
import manInTheMiddleImage from '@/assets/images/cookies/man-in-the-middle.webp';
import pathImage from '@/assets/images/cookies/path.webp';
import serverCookieImage from '@/assets/images/cookies/server-cookie.webp';
import setCookieHeaderImage from '@/assets/images/cookies/set-cookie-header.webp';
import xssImage from '@/assets/images/cookies/xss.webp';

import ImageSlide, {ImageSize} from '@/slides/image/image.slide';
import VersusSlide from '@/slides/versus/versus.slide';

export default function CookiesChapter(): ReactElement {
    const heading = 'Cookies' as const;

    return (
        <section>
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={clientCookieImage.src}
                caption="Client Cookie"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={serverCookieImage.src}
                imageSize={ImageSize.SMALL}
                caption="Server Cookie"
            />
            <VersusSlide
                isAutoAnimated={true}
                heading={heading}
                columns={[
                    {
                        heading: 'Set-Cookie Header',
                        imageSrc: setCookieHeaderImage.src,
                        description: 'It is used to send a cookie from the server to the client.',
                    },
                    {
                        heading: 'Cookie Header',
                        imageSrc: cookieHeaderImage.src,
                        description: 'Allows client to send cookies back to the server.',
                    },
                ]}
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={manInTheMiddleImage.src}
                caption="Secure Attribute & Man-in-the-middle Attack"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={xssImage.src}
                caption="HttpOnly Attribute & Cross-site Scripting (XSS) Attack"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={csrfImage.src}
                caption="SameSite Attribute & Cross-site Request Forgery (CSRF) Attack"
            />
            <ImageSlide isAutoAnimated={true} heading={heading} imageSrc={domainImage.src} caption="Domain Attribute" />
            <ImageSlide isAutoAnimated={true} heading={heading} imageSrc={pathImage.src} caption="Path Attribute" />
        </section>
    );
}
