import React, { FC } from 'react';


interface ITextStyles {
  textAlign           ?: any,
  whiteSpace          ?: any,
  fontWeight          ?: any,
  textTransform       ?: any,
  color               ?: string,
  fontSize            ?: string,
  lineHeight          ?: string,
  textIndent          ?: string,
  textShadow          ?: string,
  wordSpacing         ?: string,
  verticalAlign       ?: string,
  letterSpacing       ?: string,
  textDecoration      ?: string,
}

type TVerticalAlign   = 'top' | 'bottom';
type TWhiteSpace      = 'nowrap' | 'pre-line';
type TTextAlign       = 'center' | 'left' | 'right' | 'justify';
type TTextTransform   = 'uppercase' | 'lowercase' | 'capitalize';
type TTextDecoration  = 'overline' | 'line-through' | 'underline';
type TFontWeight      = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

interface TextProps {
  color               ?: string,
  fontSize            ?: number,
  className           ?: string,
  lineHeight          ?: number,
  textIndent          ?: number,
  textShadow          ?: string,
  wordSpacing         ?: number,
  letterSpacing       ?: number,
  textAlign           ?: TTextAlign,
  whiteSpace          ?: TWhiteSpace,
  fontWeight          ?: TFontWeight,
  verticalAlign       ?: TVerticalAlign,
  textTransform       ?: TTextTransform,
  textDecoration      ?: TTextDecoration[],
}

const Text: FC<TextProps> = ({
  color,
  children,
  fontSize,
  className,
  textAlign,
  lineHeight,
  textIndent,
  textShadow,
  whiteSpace,
  fontWeight,
  wordSpacing,
  verticalAlign,
  textTransform,
  letterSpacing,
  textDecoration,
}) => { 
  const textStyles: ITextStyles = {};
  textStyles.color          = color ? color : 'black';
  textStyles.textAlign      = textAlign ? textAlign : 'left';
  textStyles.fontSize       = fontSize ? `${fontSize}px` : '16px';
  textStyles.whiteSpace     = whiteSpace ? whiteSpace : 'normal';
  textStyles.fontWeight     = fontWeight ? fontWeight : 'normal';
  textStyles.textShadow     = textShadow ? textShadow : undefined;
  textStyles.textIndent     = textIndent ? `${textIndent}px` : '0';
  textStyles.textTransform  = textTransform ? textTransform : 'none';
  textStyles.lineHeight     = lineHeight ? `${lineHeight}px` : 'normal';
  textStyles.wordSpacing    = wordSpacing ? `${wordSpacing}px` : 'normal';
  textStyles.verticalAlign  = verticalAlign ? verticalAlign : 'baseline';
  textStyles.letterSpacing  = letterSpacing ? `${letterSpacing}px` : '0px';
  textStyles.textDecoration = textDecoration ? textDecoration.join(' ') : 'none';


  return (
    <span 
      className    =  {className}
      style        =  {textStyles}
    >
      {children}
    </span>
  );
	
};

export default Text;