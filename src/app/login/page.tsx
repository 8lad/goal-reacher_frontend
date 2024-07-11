import { ContentContainer } from '@/components/shared/ContentContainer/ContentContainer';
import { PageWrapper } from '@/components/shared/PageWrapper/PageWrapper';
import { Title } from '@/components/shared/Title/Title';
import { TextAlignType } from '@/constants/generalConstants';

export default function LoginPage() {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title text="Welcome back. Let's login" textAlign={TextAlignType.CENTER} className="mb-9" />
      </ContentContainer>
    </PageWrapper>
  );
}
