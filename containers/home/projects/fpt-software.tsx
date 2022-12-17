import BoldText from '../../../components/atoms/bold-text';
import ExternalLink from '../../../components/atoms/external-link';
import Headline3 from '../../../components/atoms/headline-3';
import Headline5 from '../../../components/atoms/headline-5';
import Text from '../../../components/atoms/text';
import { OneProject } from './one-project';

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswskc3Yr-jeKVKgN_iVVsWhruwImbILryeQ&usqp=CAU',
    alt: '1'
  },
  {
    url: 'data:image/png;base64,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',
    alt: '2'
  }
];

export default function FptSoftware() {
  return (
    <OneProject images={images} isReversed>
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
