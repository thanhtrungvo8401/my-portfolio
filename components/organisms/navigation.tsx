import Link from 'next/link';
import { ANCHOR } from '../../utils/constant';
import Button from '../atoms/button';
import Container from '../atoms/container';

const links = [
  { text: 'Home', url: `#${ANCHOR.HOME}` },
  { text: 'Projects', url: `#${ANCHOR.PROJECTS}` },
  { text: 'Honors & awards', url: `#${ANCHOR.HONORS_AWARDS}` },
  { text: 'Languages', url: `#${ANCHOR.LANGUAGES}` },
  { text: 'Contact', url: `#${ANCHOR.CONTACT}` }
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 items-center w-full shadow-xl bg-gray-50">
      <Container className="flex items-center justify-between h-20">
        <Link
          href={'#'}
          className="hidden overflow-hidden rounded-full w-14 h-14 md:inline-block"
          style={{
            backgroundImage: 'url("/images/me-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></Link>

        <div className="flex flex-wrap items-center justify-between md:block">
          {links.map((el) => {
            return (
              <Link
                href={el.url}
                key={el.text}
                className="mx-4 text-base font-bold text-gray-500 hover:text-gray-800"
              >
                {el.text}
              </Link>
            );
          })}

          <Button className="mx-4">
            <svg
              className="w-4 h-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>

            <span>CV</span>
          </Button>
        </div>
      </Container>
    </nav>
  );
}
