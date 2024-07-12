import { ContentContainer } from '@/components/shared/ContentContainer/ContentContainer';
import { PageWrapper } from '@/components/shared/PageWrapper/PageWrapper';
import { SignInForm } from '@/components/shared/SignInForm/SignInForm';
import { Title } from '@/components/shared/Title/Title';
import { dictionary } from '@/constants/dictionary';
import { TextAlignType } from '@/constants/generalConstants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: dictionary.EN.PAGES.SIGN_IN.METADATA.TITLE,
  description: dictionary.EN.PAGES.SIGN_IN.METADATA.DESCRIPTION,
};

export default function SigninPage() {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title text="Let's create your account" textAlign={TextAlignType.CENTER} className="mb-9" />
        <SignInForm />
      </ContentContainer>
    </PageWrapper>
  );
}
