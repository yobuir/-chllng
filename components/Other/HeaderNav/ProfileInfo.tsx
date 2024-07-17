import Image from 'next/image';
import React from 'react';

const ProfileInfo = () => {
  return (
      <a target="_blank" style={{ gap: 12, padding: 10, display: 'flex' }}>
          <Image src="/mark8-logo.svg" alt='user profile' width={40} height={40} />
          <div className='flex flex-col' style={{ gap: 0 }}>
              <span className='font-bold'>Yves Honore B.</span>
              <span>yveshonore@awesomity.rw</span>
          </div>
      </a>
  );
}

export default ProfileInfo;