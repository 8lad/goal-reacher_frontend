import { ContentContainer } from '@/components/shared/ContentContainer/ContentContainer';
import { PageWrapper } from '@/components/shared/PageWrapper/PageWrapper';
import { Title } from '@/components/shared/Title/Title';
import { VideoShowcase } from '@/components/shared/VideoShowcase/VideoShowcase';
import { TextAlignType } from '@/constants/generalConstants';

export default function Home() {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title
          text="You can reach whatever you want"
          textAlign={TextAlignType.CENTER}
          className="mb-5"
        />
        <VideoShowcase />
      </ContentContainer>
    </PageWrapper>
  );
}
