import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { createContext } from 'react';

const TempalteContext=createContext(null);

export const TemplateProvider =({children})=>{

    const theme=createMuiTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'unset',
                }
            },
                MuiDialogContent:{
                    root:{
                        padding:0,
                        '&:first-child':{
                        paddingTop:0,
                        }
                    }
                },
                MuiTableCell:{
                    root:{
                        borderBottom:'none'
                    }
                },
        }
    })

    return(
        <TempalteContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}

            </ThemeProvider>

        </TempalteContext.Provider>

    )

}