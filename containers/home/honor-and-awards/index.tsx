import Container from '../../../components/atoms/container';
import Headline2 from '../../../components/atoms/headline-2';
import Headline5 from '../../../components/atoms/headline-5';
import Text from '../../../components/atoms/text';
import { ANCHOR } from '../../../utils/constant';

export default function Achievement() {
  return (
    <div className="py-10">
      <Container>
        <span id={ANCHOR.HONORS_AWARDS} className="relative -top-20"></span>

        <Headline2>HORNORS & AWARDS</Headline2>

        <Headline5>YU support – FPT Software (1/2022)</Headline5>
        <Text>
          Always be a great supporter of new members in BU, commended on
          {`company's`} End year party.
        </Text>
        <br />

        <Headline5>STAR OF PROJECT - DIROX (1/2020)</Headline5>
        <Text>
          Be voted to be the member having great distribution in the project,
          commended on {`company's`} End year party.
        </Text>
        <br />

        <Headline5>
          VALEDICTORIAN – HCMC University of Technology and Education
        </Headline5>
        <Text>
          Ranked 1/250 in 8/2018 and became valedictorian of Mechatronics
          Engineering Major.
        </Text>
        <br />

        <Headline5>
          STUDENT WITH 5 METRICS - HCMC University of Technology and Education
          (12/2016)
        </Headline5>
        <br />
      </Container>
    </div>
  );
}
