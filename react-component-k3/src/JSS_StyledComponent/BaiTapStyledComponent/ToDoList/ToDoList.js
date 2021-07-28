import React, { Component } from 'react';
import { Container } from '../../Containers/Container';
import { ThemeProvider } from 'styled-components';
import { ToDoListDarkTheme } from '../../Theme/ToDoListDarkTheme';
import { ToDoListLightTheme } from '../../Theme/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../../Theme/ToDoListPrimaryTheme';
class ToDoList extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={ToDoListPrimaryTheme}>
                    <Container>
                        dsdssd
                </Container>
                </ThemeProvider>

            </div>
        );
    }
}

export default ToDoList;