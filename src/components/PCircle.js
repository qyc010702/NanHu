import React from 'react';
import { Flex, Progress } from 'antd';

class ProgressCircle extends React.Component {
    render() {
        return (
            <Flex gap="small" wrap>
                <Progress
                    percent={90}
                    percentPosition={{
                        align: 'center',
                        type: 'inner',
                    }}
                    size={[400, 20]}
                />
                {/*<Progress type="circle" percent={70} status="exception" />*/}
                {/*<Progress type="circle" percent={100} />*/}
            </Flex>
        );
    }
}

export default ProgressCircle;
