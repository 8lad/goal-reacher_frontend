import classNames from 'classnames';
import { TITLE_CLASSES } from './Title.utils';
import { exo } from '@/utils/fonts';
import { TextAlignType, TextFontWeight, TitleType } from '@/constants/generalConstants';

interface TitleProps {
  text: string;
  tagName?: TitleType;
  textAlign?: TextAlignType;
  className?: string;
  fontWeight?: TextFontWeight;
}

export const Title: React.FC<TitleProps> = ({
  tagName,
  text,
  className,
  textAlign,
  fontWeight = TextFontWeight.MEDIUM,
}) => {
  const TagName = tagName ? tagName : 'h1';
  const titleClasses = classNames(
    exo.className,
    textAlign && TITLE_CLASSES.textAlign[textAlign],
    TITLE_CLASSES[TagName],
    TITLE_CLASSES.fontWeight[fontWeight],
    className,
  );
  return <TagName className={titleClasses}> {text}</TagName>;
};
