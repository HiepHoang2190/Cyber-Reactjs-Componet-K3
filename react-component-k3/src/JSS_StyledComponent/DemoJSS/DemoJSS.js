import React, { Component } from 'react';
import { Button, SmallButton } from '../Components/Button';
import { StyledLink, Link } from '../Components/Link';
import { TextField } from '../Components/TextField';
class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className="button_style" bgPrimary fontSize2x >Hello Hiệp</Button>
                <SmallButton>hello khải</SmallButton>
                <Link>test link<p>test p</p></Link>
                <StyledLink id="abc" name="abc123">ahi hi</StyledLink>
                <TextField inputColor="green">

                </TextField>
            </div>
        );
    }
}

export default DemoJSS;