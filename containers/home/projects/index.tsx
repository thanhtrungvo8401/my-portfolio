import Container from '../../../components/atoms/container';
import Headline2 from '../../../components/atoms/headline-2';
import { ANCHOR } from '../../../utils/constant';
import Dirox from './dirox';
import FptSoftware from './fpt-software';
import VCSC from './vcsc';

export default function Projects() {
  return (
    <div className="py-10">
      <span id={ANCHOR.PROJECTS} className="relative -top-20"></span>

      <Container>
        <Headline2 className="uppercase">My Projects</Headline2>
      </Container>

      <VCSC />

      <FptSoftware />

      <Dirox />
    </div>
  );
}
