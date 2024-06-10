import classNames from 'classnames';
import { ContentContainer } from '../shared/ContentContainer/ContentContainer';
import { Logo } from '../shared/Logo/Logo';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const yearDate = new Date().getFullYear();
  return (
    <footer className={classNames(className, 'bg-slate-300 py-6 drop-shadow-2xl ')}>
      <ContentContainer>
        <div className="flex justify-between items-center">
          <Logo className="w-[30px] h-[30px]" />
          <span>&copy; All all rights reserved {yearDate}</span>
        </div>
      </ContentContainer>
    </footer>
  );
};
