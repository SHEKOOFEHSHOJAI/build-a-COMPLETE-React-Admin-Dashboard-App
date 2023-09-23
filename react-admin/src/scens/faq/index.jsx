import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { data } from "../../data/mockDataFQA";
import React from "react";

export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            {
                data?.map((data1,i) => {
                    console.log(i)
                    return (
                        <React.Fragment key={data1.id}>
                            <Accordion defaultExpanded >
                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                                    <Typography
                                        sx={{
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "15px"
                                            },
                                            [theme.breakpoints.only("xs")]: {
                                                fontSize: "13px"
                                            }
                                        }}
                                        color={colors.greenAccent[500]} variant="h5">
                                        {data1.title}
                                    </Typography>
                                </AccordionSummary >
                                <AccordionDetails >
                                    <Typography
                                        sx={{
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "12px"
                                            },
                                            [theme.breakpoints.only("xs")]: {
                                                fontSize: "10px"
                                            }
                                        }}
                                    >
                                        {data1.subTitle}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </React.Fragment>
                    )
                })
            }
        </Box>
    )

}