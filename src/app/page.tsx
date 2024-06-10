import { ActionLink } from '@/components/shared/ActionLink/ActionLink';
import { ContentContainer } from '@/components/shared/ContentContainer/ContentContainer';
import { PageWrapper } from '@/components/shared/PageWrapper/PageWrapper';
import { Text } from '@/components/shared/Text/Text';
import { Title } from '@/components/shared/Title/Title';
import { VideoShowcase } from '@/components/shared/VideoShowcase/VideoShowcase';
import { ButtonType, Routes, TextAlignType, TitleType } from '@/constants/generalConstants';

export default function Home() {
  const advantages = [
    'Set Clear Goals: Define your ambitions with precision and clarity.',
    'Connect with Track Progress: Monitor your advancements and celebrate your milestones.',
    'Stay Motivated: Receive personalized reminders and motivational tips.',
    'Community: Share your journey and gain support from like-minded individuals.',
  ];

  return (
    <PageWrapper>
      <div className="mb-[50px] md:mb-[70px]">
        <ContentContainer>
          <Title
            text="You can reach whatever you want"
            textAlign={TextAlignType.CENTER}
            className="mb-9"
          />
          <VideoShowcase className="mb-9" />
          <Title
            tagName={TitleType.H2}
            text="Achieve Your Goals with Ease"
            textAlign={TextAlignType.CENTER}
            className="mb-9"
          />
          <ActionLink
            text="Create profile"
            linkType={ButtonType.PRIMARY}
            href={Routes.Login}
            className="w-fit ml-auto mr-auto mb-10"
          />
          <Text className="mb-3">
            Welcome to Goal Reacher, the ultimate goal-setting and achievement platform designed to
            help you turn your dreams into reality.
          </Text>
          <Text className="mb-3">
            Whether you&apos;re aiming to improve your health, boost your career, or enhance your
            personal life, Goal Reacher provides you with the tools and support you need to stay on
            track and reach your objectives. With our user-friendly interface and powerful features,
            you can:
          </Text>
          <ul className="mb-3 pl-3">
            {advantages.map((text) => (
              <li key={text} className="mb-2 italic before:content-[-]">
                - {text}
              </li>
            ))}
          </ul>
          <Text className="mb-3">
            Start your journey to success today with Goal Reacher. Sign up now and take the first
            step towards achieving your goals!
          </Text>
        </ContentContainer>
      </div>
    </PageWrapper>
  );
}
