import { Back } from 'gsap';
import BoldText from '../../../components/atoms/bold-text';
import ExternalLink from '../../../components/atoms/external-link';
import Headline3 from '../../../components/atoms/headline-3';
import Headline5 from '../../../components/atoms/headline-5';
import Text from '../../../components/atoms/text';
import { OneProject } from './one-project';

const images = [
  {
    url: 'https://play-lh.googleusercontent.com/YEsjBl2D1Qk-dCqYa2mQpGBO_gny0U71fi6LLciAqc9q2zt02lC-WATmdPENeFi6LA',
    alt: 'Viet Capital Securities Joint Stock Company'
  },
  {
    url: 'https://image.vietstock.vn/2020/05/26/Banviet_1.jpg',
    alt: 'Viet Capital Securities Joint Stock Company 2'
  },
  {
    url: 'https://www.marketreview.com/wp-content/uploads/2019/11/trading-bonds.jpg',
    alt: 'Trading bonds'
  },
  {
    url: 'https://api.vcsc.com.vn/www/cms/uploads/froala/images/mo-tai-khoan-chung-khoan-hinh-anh.png',
    alt: 'YKYC - VCSC'
  },
  {
    url: 'https://cafefcdn.com/thumb_w/650/pr/2020/1606446326324-0-8-370-600-crop-1606446330463-63742077684879.jpg',
    alt: 'YKYC - VCSC 2'
  }
];

export default function VCSC() {
  return (
    <OneProject
      images={[...images]}
      imageScrollDuration={10}
      imageScrollLocation={-2000}
      scrollTriggerConfig={{
        start: 'top top+=80%',
        end: 'bottom bottom-=80%',
        scrub: 1
      }}
      effects={[
        {
          autoAlpha: 1,
          duration: 2,
          yPercent: 40,
          ease: Back.easeInOut
        }
      ]}
    >
      <Headline3 className="mb-6">
        Viet Capital Securities
        <Text className="!font-normal">PRODUCT | {`Apr 2022 - Present`}</Text>
      </Headline3>

      {/* BOND */}
      <Headline5>Bond Admin / Client</Headline5>

      <Text>
        <BoldText>Bond Admin: </BoldText> A maker/checker web application that
        allows users (CS, Broker, Admin) to create and check the information
        about Publishers, Bonds, Trading orders, Professional-traders.
      </Text>
      <Text>
        We use KeyCloak to manage user authentication, and authorization... only
        user with specific roles can see, create or edit paticular view.
      </Text>
      <br />

      <Text>
        <BoldText>Bond Client: </BoldText>A website where the end-users can
        request/cancel buying/selling orders to trade offering products
        published by Publishers or VCI (Our company).
      </Text>
      <Text>
        Users are also able to check their order status, histories and assets
        easily thanks to this application.
      </Text>

      <br />

      <Text>
        Accessable links:{' '}
        <ExternalLink href="https://bond.vcsc.com.vn/">
          BOND CLIENT
        </ExternalLink>
      </Text>
      <br />

      <Text>
        <BoldText>Tech stack: </BoldText> ExpressJs, ReactJs, NextJs, React
        Queries, Postgres, Aggrid, KeyCloak, Vue-Reactity...
      </Text>

      {/* EKYC */}
      <Headline5 className="mt-4">EKYC</Headline5>

      <Text>
        We are a Joint Stock company so we need users to do the EKYC
        (registering, provideing enough information to make the account legal).
        We make it during the Covid 19 pandemic as the users ${`couldn't`} go to
        our office.
      </Text>
      <Text>
        In this project, I was in charge of making the CRM (Admin page of EKYC)
        so that the staffs could finish any failed EKYCs manually, generating
        reports, tracking,...
      </Text>

      <br />

      <Text>
        Accessable links:{' '}
        <ExternalLink href="https://www.vcsc.com.vn/mo-tai-khoan">
          EKYC
        </ExternalLink>
      </Text>

      <br />

      <Text>
        <BoldText>Tech stack: </BoldText> ExpressJs, ReactJs, MongoDB,..
      </Text>
    </OneProject>
  );
}
