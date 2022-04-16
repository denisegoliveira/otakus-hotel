import React from "react";
import { FormControl, Grid } from "@chakra-ui/react"
import "./InputLogin.css"
function InputLogin() {
    return (
        <>
            <Grid>
                <FormControl>
                    <FormLabel>Nome completo</FormLabel>
                    <Input type="text" />
                </FormControl>
            </Grid>
        </>
    )
}

export default InputLogin;