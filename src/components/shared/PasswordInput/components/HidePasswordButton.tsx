import { IconWrapper } from '../../IconWrapper/IconWrapper';
import { ClosedEye, OpenedEye } from '../../svg/svg';

interface HidePasswordButtonProps {
  isPassworsVisible: boolean;
  onClick: VoidFunction;
}

export const HidePasswordButton: React.FC<HidePasswordButtonProps> = ({
  isPassworsVisible,
  onClick,
}) => {
  return (
    <button
      className="absolute top-0 right-2 flex justify-center items-center"
      type="button"
      onClick={onClick}
    >
      {isPassworsVisible ? (
        <IconWrapper className="w-[30px] h-[30px] flex" icon={<OpenedEye />} />
      ) : (
        <IconWrapper className="w-[30px] h-[30px] flex" icon={<ClosedEye />} />
      )}
    </button>
  );
};
