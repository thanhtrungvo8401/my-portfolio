import { Back } from 'gsap';
import React from 'react';
import Container from '../../../components/atoms/container';
import MyImage from '../../../components/atoms/image';
import { gsap } from '../../../components/libs/gsap';
import { useIsMobile } from '../../../hooks/isMobile.hook';

type Project = {
  children: React.ReactNode;
  images: Array<{ url: string; alt: string }>;
  isReversed?: boolean;
  scrollTriggerConfig?: Record<string, any>;
  effects?: Array<Record<string, any>>;
};

const IMAGES_BLOCK = 'images-block';
const SELECTOR = '.images-block';

export function OneProject(props: Project) {
  const {
    children,
    images = [],
    isReversed = false,
    scrollTriggerConfig = {},
    effects = []
  } = props;
  const projectRef: React.MutableRefObject<any> = React.useRef();

  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (!isMobile) {
      const ctx = gsap.context(() => {
        // Homepage scroll animation:
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: projectRef.current,
            ...scrollTriggerConfig
          }
        });

        effects.forEach((e) => {
          tl1.to(SELECTOR, e);
        });

        // Introduce images auto scrolling:
        const tl2 = gsap.timeline({
          defaults: {
            ease: 'linear',
            repeat: -1
          }
        });

        tl2
          .from('.IMAGES_SCROLL', {
            yPercent: 0
          })
          .to('.IMAGES_SCROLL', {
            yPercent: -40,
            ease: Back.easeInOut,
            duration: 5
          });
      }, projectRef);

      return () => ctx.revert();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <Container
      className="py-10 shadow-inner last:pb-0"
      background={{
        className: isReversed && !isMobile ? 'bg-gray-50' : 'bg-white'
      }}
    >
      <div
        className="flex flex-wrap justify-between gap-8 lg:flex-nowrap"
        ref={projectRef}
      >
        <div
          className={`w-full lg:w-2/5  ${
            isReversed && !isMobile ? 'order-2' : 'order-1'
          }`}
        >
          {children}
        </div>

        <div
          className={`relative w-full lg:w-3/5 h-96 rounded-2xl ${IMAGES_BLOCK} ${
            isReversed ? 'order-1' : 'order-2'
          }`}
          style={{ paddingTop: '40%' }}
        >
          <div
            className={`absolute top-0 w-full h-full overflow-y-scroll hide-scroll-bar `}
          >
            <div className="IMAGES_SCROLL">
              {images.map((el, index) => {
                return (
                  <MyImage
                    key={el.url + '-' + index}
                    src={el.url}
                    className="w-full h-auto"
                    alt={el.alt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
