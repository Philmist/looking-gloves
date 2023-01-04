/* eslint-disable @next/next/no-img-element */
import { PRODUCT_DESC_SHORT, PRODUCT_NAME, PRODUCT_NAME_SHORT } from '@utils/constant';
import type { NextPage } from 'next';
import Head from 'next/head';

import { PageCard } from '@components/common/PageCard';
import { PageContainer } from '@components/common/PageContainer';

const HomePage: NextPage = () => {
  return (
    <PageContainer className="justify-center" hideHomeBtn favicon="🖼️">
      <Head>
        <title>{PRODUCT_NAME_SHORT}</title>
      </Head>

      <div className="flex flex-col items-center gap-2 max-w-3xl">
        <h1 className="text-center">
          <mark>{PRODUCT_NAME}</mark>
        </h1>
        <h2 className="text-center mt-0">{PRODUCT_DESC_SHORT}</h2>

        <p>
          Hi there! Welcome to <b>{PRODUCT_NAME}</b>, a webapp for you the creator to easily create
          and display holograms on your Looking Glass device. With me, you can convert your{' '}
          <u>video/images</u> (works for <b>NeRF</b> video output too 😎) and <u>any photos</u> and
          transform them into 3D holograms. <br />
          Let me know if you have any questions or feedback{' '}
          <a
            className="no-underline"
            href={`mailto:moscartong@gmail.com?subject=${PRODUCT_NAME} Feedback`}
          >
            💬
          </a>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <PageCard
            title="🔫 Luma NeRF"
            content={
              <>
                Convert{' '}
                <a
                  href="https://captures.lumalabs.ai/me"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Luma AI
                </a>{' '}
                NeRF to hologram with just a URL.
              </>
            }
            link="/luma"
            thumbnail="/assets/cover-luma.jpg"
            alert="❗ Some of the light field output from Luma AI have curved camera path, which may lead to a toe-in/curve effect on the Looking Glass."
            alertClassName="alert-warning"
          />

          <PageCard
            title="🎥 Video"
            content={
              <>
                Capture/render a video following this{' '}
                <a
                  href="https://docs.lookingglassfactory.com/keyconcepts/capturing-a-lightfield/linear-light-field-capture"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Linear Light Field Capture
                </a>{' '}
                method, then convert the video to hologram.
              </>
            }
            link="/video"
            thumbnail="/assets/cover-images.jpg"
          />

          <PageCard
            title="🎞️ Images"
            content="Create hologram from a light field photoset."
            link="/images"
          />

          <PageCard title="🕵️ Quilt" content="Refocus a quilt image." link="/quilt" />

          <PageCard
            title="🏞️ RGBD"
            content="Convert any picture into RGBD image"
            link="/rgbd"
            thumbnail="/assets/cover-rgbd.png"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
