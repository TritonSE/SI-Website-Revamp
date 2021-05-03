/**
 * The Vertical Stepper used in the following classes
 *   - Conferences
 *
 * Takes in the following as props
 *   - Color
 *   -
 *
 * @summary     Vertical Stepper class
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import StepConnector from "@material-ui/core/StepConnector";
import Step from "@material-ui/core/Step";
import { StepButton, StepLabel } from "@material-ui/core";
import CustomPagination from "./Pagination";
import "../../../css/Stepper/Stepper.css";

const useStyles = makeStyles(() => ({
    root: {
        width: "15%",
        color: "#454322",
        border: "1px solid black",
    },
    step_label_root: {
        fontSize: "18px",
        color: "#6652A0",
        fontWeight: "500",
        width: "calc(200px)",
        textAlign: "left",
        marginLeft: "calc(20px)",
    },
    icon_container: {
        width: "25px",
        height: "25px",
        justifyContent: "center",
    },
    button: {
        width: "20px",
        height: "20px",
        backgroundColor: "transparent",
        border: "4px solid #6652A0",
        borderRadius: "50%",
    },
    buttonActive: {
        width: "20px",
        height: "20px",
        backgroundColor: "#6652A0",
        border: "4px solid #6652A0",
        borderRadius: "50%",
        color: "white",
    },
}));

const ColorlibConnector = withStyles({
    line: {
        marginTop: "calc(5.5px)",
        width: 3,
        border: 0,
        backgroundColor: "#6652A0",
        borderRadius: 1,
        marginLeft: "calc(0.5px)",
    },
})(StepConnector);

function getSteps() {
    return [
        "New",
        "United States",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
        "Country",
    ];
}

const stepperNode = (index) => <div className="stepper-node">{`${index + 1}th`}</div>;

export default function VerticalStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [indices, setIndices] = useState([0, 10]);
    const [splitSteps, setSplitSteps] = useState(getSteps());
    const steps = getSteps();

    useEffect(() => {
        setSplitSteps(steps.slice(indices[0], indices[1]));
    }, []);

    useEffect(() => {
        setSplitSteps(steps.slice(indices[0], indices[1]));
    }, [indices]);

    const handleStep = (step) => {
        setActiveStep(step);
        setActiveIndex(step);
    };

    const updatePage = (index) => {
        setIndices([(index - 1) * 10, index * 10]);
    };

    return (
        <div className={classes.root}>
            <Stepper
                nonLinear
                activeStep={activeStep}
                orientation="vertical"
                connector={<ColorlibConnector />}
            >
                {splitSteps.map((label, index) => (
                    <Step key={label}>
                        <StepButton
                            onClick={() => handleStep(index)}
                            classes={
                                activeIndex === index
                                    ? { root: classes.buttonActive }
                                    : { root: classes.button }
                            }
                            icon={stepperNode(index)}
                        >
                            <StepLabel
                                classes={{
                                    label: classes.step_label_root,
                                    iconContainer: classes.icon_container,
                                }}
                            >
                                {label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>

            <div className="pagination-stepper">
                <CustomPagination count={steps.length} updatePage={updatePage} />
            </div>
        </div>
    );
}
