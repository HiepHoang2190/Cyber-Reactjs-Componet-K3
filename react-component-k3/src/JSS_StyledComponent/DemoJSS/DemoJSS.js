import React, { Component } from 'react';
import { Button, SmallButton } from '../Components/Button';

class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className="button_style" bgPrimary fontSize2x >Hello Hiệp</Button>
                <SmallButton>hello khải</SmallButton>
            </div>
        );
    }
}

export default DemoJSS;