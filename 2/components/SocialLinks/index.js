import React from 'react'
import styles from './styles.module.css'

function SocialLinks() {
    const links = [
        { name: 'GitHub', url: '#' },
        { name: 'Frontend Mentor', url: '#' },
        { name: 'LınkedIn', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Instagram', url: '#' },
        
    ];
  return (
    <ul className='flex flex-col gap-4 items-center -mb-2 md:-mb-5'>
        {links.map((link) => (
            <li
            className='flex items-center'
            key={link.name}>
                <a
                    href={link.url}
                    target='_blank'
                    className={`${styles.socialLink} block w-[270px] md:w-xs py-3 text-sm text-white rounded-lg text-center font-bold mx-auto `}
                >
                {link.name}  
                </a>
            </li>
        ))}
    </ul>
  );
}

export default SocialLinks