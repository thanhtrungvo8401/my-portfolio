import Button from '../../components/atoms/button';
import Container from '../../components/atoms/container';
import Headline1 from '../../components/atoms/headline-1';

export default function GoodReads() {
  return (
    <Container>
      <Headline1 className="mt-8">Good reads</Headline1>

      <div className="flex gap-4 p-4 shadow">
        <a
          target="_blank"
          href="https://levelup.gitconnected.com/ultimate-10-stages-to-master-backend-development-f6f65f22a327"
          rel="noreferrer"
        >
          <Button className="!font-normal">
            Ultimate 10 Stages to Master Backend Development
          </Button>
        </a>

        <a
          target="_blank"
          href="https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/"
          rel="noreferrer"
        >
          <Button className="!font-normal">Eslint-Prettier (P1)</Button>
        </a>

        <a
          target="_blank"
          href="https://khalilstemmler.com/blogs/tooling/prettier/"
          rel="noreferrer"
        >
          <Button className="!font-normal">Eslint-Prettier (P2)</Button>
        </a>
      </div>
    </Container>
  );
}
