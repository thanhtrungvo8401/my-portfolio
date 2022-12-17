import Container from '../../../components/atoms/container';
import Headline2 from '../../../components/atoms/headline-2';
import Headline5 from '../../../components/atoms/headline-5';
import Text from '../../../components/atoms/text';
import { ANCHOR } from '../../../utils/constant';

export default function Languages() {
  return (
    <Container>
      <span id={ANCHOR.LANGUAGES} className="relative -top-20"></span>

      <Headline2 className="uppercase">Languages</Headline2>

      <Headline5>English: </Headline5>
      <Text>
        B2 (Upper Intermediate - 472) This result was taken from the
        EnglishScore Mobile App (by British Council) in Jul 2021
      </Text>

      <br />

      <Headline5>Japanese: </Headline5>
      <Text>JLPT N3 (98 / 180) Japanese certificate taken in Dec 2020</Text>
    </Container>
  );
}
