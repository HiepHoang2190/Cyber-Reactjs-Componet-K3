import React, { Component } from 'react';
import { Button, SmallButton } from '../Components/Button';
import { StyledLink, Link } from '../Components/Link'

class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className="button_style" bgPrimary fontSize2x >Hello Hiệp</Button>
                <SmallButton>hello khải</SmallButton>
                <StyledLink>ahi hi</StyledLink>
            </div>
        );
    }
}

export default DemoJSS;