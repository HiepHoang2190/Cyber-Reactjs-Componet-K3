import React, { Component } from 'react';
import { Button } from '../Components/Button';

class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className="button_style" bgPrimary fontSize2x >Hello Hiệp</Button>

            </div>
        );
    }
}

export default DemoJSS;