import Container from '../../../components/atoms/container';
import Headline2 from '../../../components/atoms/headline-2';
import MyImage from '../../../components/atoms/image';
import Text from '../../../components/atoms/text';
import { ANCHOR } from '../../../utils/constant';

export default function Contact() {
  return (
    <Container className="py-10">
      <span id={ANCHOR.CONTACT} className="relative -top-20"></span>

      <Headline2 className="uppercase">Contact</Headline2>

      <Text className="flex items-center">
        <MyImage
          src="/images/phone.png"
          className="inline-block w-6 h-6 mr-4"
        />
        +84 336660540
      </Text>
      <br />

      <Text className="flex items-center">
        <MyImage src="/images/mail.png" className="inline-block w-6 h-6 mr-4" />
        thanhtrungvo8401@gmail.com
      </Text>
      <br />

      <Text className="flex items-center">
        <MyImage
          src="/images/linkedIn.png"
          className="inline-block w-6 h-6 mr-4"
        />
        https://www.linkedin.com/in/vo-thanh-trung
      </Text>
      <br />

      <Text className="flex items-center">
        <MyImage
          src="/images/github.png"
          className="inline-block w-6 h-6 mr-4"
        />
        https://github.com/thanhtrungvo8401
      </Text>
      <br />
    </Container>
  );
}
