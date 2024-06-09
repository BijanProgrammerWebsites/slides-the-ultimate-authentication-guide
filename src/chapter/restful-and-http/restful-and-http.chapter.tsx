import {ReactElement} from 'react';

import fetchImage from '@/assets/images/restful-and-http/fetch.webp';
import httpMethodsImage from '@/assets/images/restful-and-http/http-methods.webp';
import httpStatusCodesImage from '@/assets/images/restful-and-http/http-status-codes.webp';
import indexHtmlImage from '@/assets/images/restful-and-http/index-html.webp';
import requestAndResponseImage from '@/assets/images/restful-and-http/request-and-response.webp';
import resourcesImage from '@/assets/images/restful-and-http/resources.webp';
import serverAndClientImage from '@/assets/images/restful-and-http/server-and-client.webp';
import statefulImage from '@/assets/images/restful-and-http/stateful.webp';
import statelessImage from '@/assets/images/restful-and-http/stateless.webp';

import ImageSlide, {ImageSize} from '@/slides/image/image.slide';
import VersusSlide from '@/slides/versus/versus.slide';

export default function RestfulAndHttpChapter(): ReactElement {
    const heading = 'RESTful & HTTP' as const;

    return (
        <section>
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={serverAndClientImage.src}
                imageSize={ImageSize.MEDIUM}
                caption="Server & Client"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={requestAndResponseImage.src}
                imageSize={ImageSize.MEDIUM}
                caption="Request & Response"
            />
            <VersusSlide
                isAutoAnimated={true}
                heading={heading}
                columns={[
                    {
                        heading: 'Stateless',
                        imageSrc: statelessImage.src,
                        description: '',
                    },
                    {
                        heading: 'Stateful',
                        imageSrc: statefulImage.src,
                        description: '',
                    },
                ]}
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={indexHtmlImage.src}
                caption="Requesting index.html"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={resourcesImage.src}
                caption="Requesting Other Resources Like CSS, JS, Images, Fonts and ..."
            />
            <ImageSlide isAutoAnimated={true} heading={heading} imageSrc={fetchImage.src} caption="Fetch & API" />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={httpMethodsImage.src}
                imageSize={ImageSize.SMALL}
                caption="HTTP Methods"
            />
            <ImageSlide
                isAutoAnimated={true}
                heading={heading}
                imageSrc={httpStatusCodesImage.src}
                caption="HTTP Status Codes"
            />
        </section>
    );
}
