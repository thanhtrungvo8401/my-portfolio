import Container from '../atoms/container';

export default function Footer() {
  return (
    <footer className="py-8 mt-20 shadow-inner">
      <Container className="">
        <p className="m-0 text-gray-500">
          <a
            className="font-medium text-gray-500 underline"
            href="https://www.freepik.com/free-vector/ho-chi-minh-city-vietnam-line-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_23985692.htm#query=website%20background&position=2&from_view=keyword"
          >
            Image by Sky and Glass
          </a>{' '}
          on Freepik
        </p>
      </Container>
    </footer>
  );
}
