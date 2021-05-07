/**
 * The Vertical Stepper is a component used for displaying
 * a list of items in a orderly fashion. This will be a
 * reusable component and has the following properties:
 *
 * Takes in the following as props
 *   color - string - prop to determine color of the stepper
 *   setParentIndex - number - used to update the parent index
 *   height - string - height of the stepper
 *   items - object - items consist of title and number
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

const ordinal_suffix_of = (i) => {
    const ones = i % 10;
    const hundreds = i % 100;

    if (ones === 1 && hundreds !== 11) {
        return `${i}st`;
    }
    if (ones === 2 && hundreds !== 12) {
        return `${i}nd`;
    }
    if (ones === 3 && hundreds !== 13) {
        return `${i}rd`;
    }
    return `${i}st`;
};

const stepperNode = (index) => <div className="stepper-node">{ordinal_suffix_of(index)}</div>;

export default function VerticalStepper(props) {
    const useStyles = makeStyles(() => ({
        root: {
            minWidth: "190px",
            margin: "8vh 0vw 9vh 8vw",
        },
        stepDiv: {
            minHeight: "calc(666.5px)",
        },
        step_label_root: {
            fontSize: "18px",
            color: props.color,
            fontWeight: "500",
            width: "calc(200px)",
            textAlign: "left",
            marginLeft: "calc(15px)",
        },
        icon_container: {
            width: "32px",
            height: "24px",
            justifyContent: "center",
        },
        button: {
            width: "25px",
            height: "25px",
            backgroundColor: "transparent",
            border: `3px solid ${props.color}`,
            borderRadius: "50%",
        },
        buttonActive: {
            width: "25px",
            height: "25px",
            backgroundColor: "#6652A0",
            border: `2px solid ${props.color}`,
            borderRadius: "50%",
            color: "white",
            transform: "scale(1.15)",
        },
    }));

    const ColorlibConnector = withStyles({
        line: {
            marginTop: "calc(5.5px)",
            width: 3,
            border: 0,
            backgroundColor: props.color,
            borderRadius: 1,
            marginLeft: "calc(2px)",
        },
    })(StepConnector);

    function getSteps() {
        const arr = [];
        for (let i = 0; i < props.items.length; i++) {
            const obj = {};
            const two = props.items[i].location.split(",").splice(1, 1);
            obj.location = two;
            obj.number = props.items[i].number;

            arr.push(obj);
        }

        return arr;
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [indices, setIndices] = useState([0, 9]);
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
        props.setParentIndex(step);
    };

    const updatePage = (index) => {
        setIndices([(index - 1) * 9, index * 9]);
    };

    return (
        <div className={classes.root}>
            <div className={classes.stepDiv}>
                <Stepper
                    nonLinear
                    activeStep={activeStep}
                    orientation="vertical"
                    connector={<ColorlibConnector />}
                >
                    {splitSteps.map((step, index) => (
                        <Step>
                            <StepButton
                                onClick={() => handleStep(index)}
                                classes={
                                    activeIndex === index
                                        ? { root: classes.buttonActive }
                                        : { root: classes.button }
                                }
                                icon={stepperNode(step.number)}
                            >
                                <StepLabel
                                    classes={{
                                        label: classes.step_label_root,
                                        iconContainer: classes.icon_container,
                                    }}
                                >
                                    {step.location}
                                </StepLabel>
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </div>

            <div className="pagination-stepper">
                <CustomPagination count={steps.length} updatePage={updatePage} />
            </div>
        </div>
    );
}
