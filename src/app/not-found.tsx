import React from 'react';

import { Flex }
    from
    "antd"
    ;

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    borderRadius: 6, 
};

const  NotFound = () => {
  return (
      <Flex style={boxStyle} gap="middle" vertical justify="center" align="center">
       <div>Page not found</div>
    </Flex>
  );
}

export default  NotFound
