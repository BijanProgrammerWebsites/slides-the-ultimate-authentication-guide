'use client';

import {PropsWithChildren, ReactElement, useEffect, useRef} from 'react';

import type RevealType from 'reveal.js';

type Props = PropsWithChildren;

export default function RevealProvider({children}: Props): ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const revealRef = useRef<RevealType.Api | null>(null);

    useEffect(() => {
        if (revealRef.current) {
            return;
        }

        const init = async (): Promise<void> => {
            const Reveal = (await import('reveal.js')).default;
            const ZoomPlugin = (await import('reveal.js/plugin/zoom/zoom')).default;

            revealRef.current = new Reveal(containerRef.current!, {});

            revealRef.current.initialize({
                controlsLayout: 'edges',
                slideNumber: (slide): [string] => {
                    const horizontalOffset = slide && slide.dataset.visibility === 'uncounted' ? 0 : 1;

                    const currentSlideNumber = revealRef.current!.getSlidePastCount(slide) + horizontalOffset;
                    const totalSlidesCount = revealRef.current!.getTotalSlides();

                    const tokens = ['Page', currentSlideNumber, 'of', totalSlidesCount];
                    return [tokens.join(' ')];
                },
                hashOneBasedIndex: true,
                hash: true,
                rtl: false,
                display: 'grid',
                hideInactiveCursor: false,
                plugins: [ZoomPlugin],
                margin: 0.1,
            });
        };

        init().then();

        return (): void => {
            if (!revealRef.current) {
                return;
            }

            try {
                revealRef.current.destroy();
                revealRef.current = null;
            } catch (e) {
                console.warn('Reveal.js destroy call failed.');
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="reveal">
            <div className="slides">{children}</div>
        </div>
    );
}
