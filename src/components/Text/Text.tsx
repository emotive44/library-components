import React, { FC } from 'react';


interface ITextStyles {
 [key: string]: any,
}

type TVerticalAlign   = 'top' | 'bottom';
type TWhiteSpace      = 'nowrap' | 'pre-line';
type TTextAlign       = 'center' | 'left' | 'right' | 'justify';
type TTextTransform   = 'uppercase' | 'lowercase' | 'capitalize';
type TTextDecoration  = 'overline' | 'line-through' | 'underline';
type TFontWeight      = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type TDisplay         = 'block' | 'inline-block' | 'inline' | 'flex';

interface TextProps {
  color               ?: string,
  fontSize            ?: number,
  className           ?: string,
  lineHeight          ?: number,
  textIndent          ?: number,
  textShadow          ?: string,
  wordSpacing         ?: number,
  letterSpacing       ?: number,
  display             ?: TDisplay,
  textAlign           ?: TTextAlign,
  whiteSpace          ?: TWhiteSpace,
  fontWeight          ?: TFontWeight,
  verticalAlign       ?: TVerticalAlign,
  textTransform       ?: TTextTransform,
  textDecoration      ?: TTextDecoration[],
}

const Text: FC<TextProps> = ({
  color,
  display,
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
  textStyles.color          = color && color;
  textStyles.display        = display && display;
  textStyles.textAlign      = textAlign && textAlign;
  textStyles.fontSize       = fontSize && `${fontSize}px`;
  textStyles.whiteSpace     = whiteSpace && whiteSpace
  textStyles.fontWeight     = fontWeight && fontWeight;
  textStyles.textShadow     = textShadow && textShadow;
  textStyles.textIndent     = textIndent && `${textIndent}px`
  textStyles.textTransform  = textTransform && textTransform;
  textStyles.lineHeight     = lineHeight && `${lineHeight}px`;
  textStyles.wordSpacing    = wordSpacing && `${wordSpacing}px`;
  textStyles.verticalAlign  = verticalAlign && verticalAlign;
  textStyles.letterSpacing  = letterSpacing && `${letterSpacing}px`;
  textStyles.textDecoration = textDecoration && textDecoration.join(' ');

  if(textIndent) {
    textStyles.display = 'block';
  }


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