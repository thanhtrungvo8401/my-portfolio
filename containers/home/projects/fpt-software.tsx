import BoldText from '../../../components/atoms/bold-text';
import ExternalLink from '../../../components/atoms/external-link';
import Headline3 from '../../../components/atoms/headline-3';
import Headline5 from '../../../components/atoms/headline-5';
import Text from '../../../components/atoms/text';
import { OneProject } from './one-project';

const images = [
  {
    url: 'https://jobs.uit.edu.vn/sites/default/files/logo/fpt-software-595a5b18571d5_0.jpg',
    alt: 'FPT - Outsourcing company'
  },
  {
    url: 'https://i.chungta.vn/2019/01/14/5f6d53583f0c83abfc1e47268ab669-3162-4032-1547451190.jpg',
    alt: 'FPT - Outsourcing company 2'
  },
  {
    url: 'https://eu-trademark.s3.amazonaws.com/018151887',
    alt: 'MIPART - Company I worked for'
  },
  {
    url: '/images/mipart.png',
    alt: 'MIPART - Company I worked for'
  },
  {
    url: 'data:image/jpeg;base64,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',
    alt: 'MIPART - Company I worked for'
  }
];

export default function FptSoftware() {
  return (
    <OneProject
      images={images}
      isReversed
      imageScrollDuration={10}
      imageScrollLocation={-2000}
    >
      <Headline3 className="mb-6">
        FPT Software
        <Text className="!font-normal">
          Outsourcing | {`Feb 2021 - Mar 2022`}
        </Text>
      </Headline3>

      <Headline5>Mipart - machine manufacturing companies</Headline5>

      <Text>
        An E-commerce website: allowing users to upload or order the existed
        products. Mipart would calculate the prices, manufacture, and ship the
        finished products to the {`customer's`} addresses.
      </Text>
      <Text>
        The content of all pages are editable rely on a CMS (Strapi) system.
      </Text>
      <Text>
        Customer portal: The management site for {`Mipart's`} partners to check
        their orders, update their profiles, addresses.
      </Text>

      <br />

      <Text>
        Accessable links:{' '}
        <ExternalLink href="https://mipart.com/">Mipart</ExternalLink>
      </Text>

      <br />
      <Text>
        <BoldText>Tech stack: </BoldText> NuxtJs (VueJs SSR), Tailwind Css,
        StoryBook, Jest test, Graphql, i18n,..
      </Text>
    </OneProject>
  );
}
