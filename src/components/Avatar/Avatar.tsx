import React, { FC } from 'react';

import classes from './Avatar.module.css';

type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'G' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

interface AvatarProps {
  abbr: string,
  image?: string,
  size?: 'small' | 'medium' | 'large',
  className?: string,
}

const Avatar: FC<AvatarProps> = ({
  abbr,
  size,
  image,
  className,
}) => {
  const mainClasses = [classes.avatar, classes.medium];

  const firstLetter = (name: string) => {
    return name.substr(0, 1).toUpperCase() as Letter;
  }

  const generateBackground = (abbr: string)=> {
    const colors = {
      'A'		: '#CB3B43',
      'B'		: '#1D3247',
      'C'		: '#385F87',
      'D'		: '#505A5E',
      'E'		: '#ECD007',
      'F'		: '#B22E53',
      'G'		: '#6882B0',
      'H'		: '#5D5A79',
      'I'		: '#B26492',
      'J'		: '#82A774',
      'K'		: '#8B8B8B',
      'L'		: '#EBB65D',
      'M'		: '#C46F4E',
      'N'		: '#C1C8CD',
      'O'		: '#B6BABD',
      'P'		: '#C9C8C6',
      'Q'		: '#6B7987',
      'R'		: '#C55B3F',
      'S'		: '#769851',
      'T'		: '#4291B2',
      'U'		: '#CF7DAA',
      'V'		: '#8770A3',
      'W'		: '#A48C53',
      'X'		: '#4EB68C',
      'Y'		: '#85B1DD',
      'Z'		: '#A24176'
    };

    return colors[firstLetter(abbr)];
  }

  if (className) {
    mainClasses.push(className);
  }

  if (size) {
    switch (size) {
      case 'small':
        mainClasses.push(classes.small);
        break;
      case 'medium':
        mainClasses.push(classes.medium);
        break;
      case 'large':
        mainClasses.push(classes.large);
        break;
    }
  }

  //Append content of the avatar
  let avatarContent: any;
  if (image) {
    avatarContent = (
      <img src={image} alt="" className={classes.image} />
    );
  } else if (abbr) {
    avatarContent = (
      <div 
        className={classes.placeholder}
        style={{ backgroundColor : generateBackground(abbr) }}
      >
        {firstLetter(abbr)}
      </div>
    );
  }

  return (
    <div className={mainClasses.join(' ')}>
      {avatarContent}
    </div>
  );

};

export default Avatar;
