import React from 'react';
import BoldText from '../../components/atoms/bold-text';
import Container from '../../components/atoms/container';
import Headline1 from '../../components/atoms/headline-1';
import Headline2 from '../../components/atoms/headline-2';
import Headline3 from '../../components/atoms/headline-3';
import Quote from '../../components/atoms/quote';
import Text from '../../components/atoms/text';
import { ANCHOR } from '../../utils/constant';

export default function HomeBanner() {
  const ref: React.MutableRefObject<any> = React.useRef();

  return (
    <Container
      background={{
        className: '!t-20',
        style: {
          backgroundImage: 'url(/images/saigon-line.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }
      }}
    >
      <span id={ANCHOR.HOME} className="relative -top-20"></span>

      <div
        ref={ref}
        style={{ height: 'calc(100vh - 5rem)' }}
        className="flex flex-col items-center justify-center"
      >
        <div className="max-w-2xl p-8 overflow-hidden text-center shadow-xl bg-gray-50 rounded-3xl md:rounded-lg">
          <Headline2 className="text-6xl text-gray-500">Trung.Vo</Headline2>

          <Headline3>Summary</Headline3>
          <Quote className="px-4 md:px-8">
            A full-stack developer, with more than 3 years of experience in
            software development, focusing on Javascript: NodeJs, ReactJs,...
          </Quote>

          <Headline3 className="mt-2">Technology</Headline3>
          <div className="flex flex-wrap gap-x-4 md:flex-nowrap">
            <div className="w-full">
              <Text className="mt-2 text-left">
                <span className="mr-2 italic underline">Frontend: </span>
                <BoldText>ReactJs, NextJs</BoldText>, VueJs, NuxtJs, Redux,
                React-queries...
              </Text>

              <Text className="mt-2 text-left">
                <span className="mr-2 italic underline">Layout/UI: </span>
                HTML, CSS, Tailwindcss, Antd, Material UI...
              </Text>
            </div>
            <div className="w-full">
              <Text className="mt-2 text-left md:mt-0">
                <span className="mr-2 italic underline">Backend: </span>
                <BoldText>NodeJs (ExpressJs)</BoldText>, SQL/NoSQL,
                Message-queue , Restful-api, JWT, ...
              </Text>

              <Text className="mt-2 text-left">
                <span className="mr-2 italic underline">Tool: </span>
                Git, VS Code, Figma, Studio 3T, PgAdmin.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
