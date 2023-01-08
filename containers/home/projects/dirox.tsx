import BoldText from '../../../components/atoms/bold-text';
import ExternalLink from '../../../components/atoms/external-link';
import Headline3 from '../../../components/atoms/headline-3';
import Headline5 from '../../../components/atoms/headline-5';
import Text from '../../../components/atoms/text';
import { OneProject } from './one-project';

const images = [
  {
    url: 'http://static.ybox.vn/2022/12/3/1670405445585-Logo_Dirox_Black_2022@4x.png',
    alt: 'Dirox - Company'
  },
  {
    url: 'https://assets.topdev.vn/images/2021/04/29/55bec4be0f604533c6d136ea7a655f00-D5njM.jpg',
    alt: 'Dirox - Compay'
  },
  {
    url: 'https://prod-central-prod-sm-site-media.s3.eu-west-1.amazonaws.com/sm/public/wp-content/uploads/2021/12/27092933/credinord-1-removebg-preview.png',
    alt: 'Credinord Company'
  },
  {
    url: 'https://i0.wp.com/everly.eu/wp-content/uploads/2020/11/Matias-Peltoniemie-CFO-Credinord.png?fit=1979%2C1235&ssl=1',
    alt: 'Credinord Company'
  }
];

export default function Dirox() {
  return (
    <OneProject
      images={images}
      scrollTriggerConfig={{
        start: 'top top+=80%',
        end: 'bottom bottom-=80%',
        scrub: 1
      }}
      effects={[]}
      imageScrollDuration={10}
      imageScrollLocation={-1600}
    >
      <Headline3 className="mb-6">
        Dirox
        <Text className="!font-normal">
          Outsourcing | {`May 2019 - July 2020`}
        </Text>
      </Headline3>

      <Headline5>Credinord (Filand)</Headline5>

      <Text>
        <BoldText>Portal: </BoldText> Allowing users to create loan requests
        After login, users are able to see there {`loan's`} status as well as
        pay back the money (including interest) if there loan payments are due.
      </Text>

      <br />
      <Text>
        <BoldText>Admin: </BoldText> The management site, provide the ability
        for the managers to approve, reject, manage the {`loan's`} status.
      </Text>

      <br />
      <Text>
        Accessable links:{' '}
        <ExternalLink href="https://www.credinord.com/en/">
          Credinord.
        </ExternalLink>
      </Text>

      <br />

      <Text>
        <BoldText>Tech stack: </BoldText> NextJs , ReactJs, Restful api, Redux,
        Semantic-ui React.
      </Text>
    </OneProject>
  );
}
