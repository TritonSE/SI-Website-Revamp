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
import "../../css/Stepper/Stepper.css";

/**
 * Convert a given number into an ordinal number
 * @param {number} i
 * @returns string of ordinal number
 */
const ordinal_suffix_of = (i) => {
    const ones = i % 10;
    const hundreds = i % 100;

    // if the remainder is 1 and 11
    if (ones === 1 && hundreds !== 11) {
        return `${i}st`;
    }
    // if the remainder is 2 and 12
    if (ones === 2 && hundreds !== 12) {
        return `${i}nd`;
    }
    // if the remainder is 3 and 13
    if (ones === 3 && hundreds !== 13) {
        return `${i}rd`;
    }
    return `${i}th`;
};

const stepperNode = (index) => <div className="stepper-node">{ordinal_suffix_of(index)}</div>;

export default function VerticalStepper(props) {
    // custom styling used for various components
    const useStyles = makeStyles(() => ({
        root: {
            minWidth: "calc(11.39vw)",
        },
        stepDiv: {
            minHeight: "calc(666.5px)",
        },
        step_label_root: {
            fontSize: "16px",
            color: `${props.color} !important`,
            width: "calc(200px)",
            textAlign: "left",
            marginLeft: "calc(15px)",
        },
        icon_container: {
            width: "30px",
            height: "22px",
            justifyContent: "center",
        },
        button: {
            width: "22px",
            height: "22px",
            backgroundColor: "transparent",
            border: `2px solid ${props.color}`,
            borderRadius: "50%",
            fontWeight: "400",
            color: `${props.color}`,
        },
        buttonActive: {
            width: "22px",
            height: "22px",
            backgroundColor: `${props.color}`,
            border: `2px solid ${props.color}`,
            borderRadius: "50%",
            color: "white",
            fontWeight: "400",
        },
    }));

    // custom styling for the connectors on the stepper
    const ColorlibConnector = withStyles({
        line: {
            marginTop: "calc(6.5px)",
            marginBottom: "calc(-2px)",
            width: 2,
            minHeight: "22px",
            border: 0,
            backgroundColor: props.color,
            borderRadius: 1,
            marginLeft: "calc(0px)",
        },
    })(StepConnector);

    /**
     * Return all the locations and conference number as an array
     * @returns array
     */
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

    // import the styling
    const classes = useStyles();
    // keep track of the current page for pagination
    const [activeStep, setActiveStep] = useState(0);
    // update the page if the user changes pages
    const [activeIndex, setActiveIndex] = useState(0);
    // indicies to render 9 items per page
    const [indices, setIndices] = useState([0, 9]);
    // steps that are split based on indices
    const [splitSteps, setSplitSteps] = useState(getSteps());

    // initial call to get all steps
    const steps = getSteps();

    // render only the first nine items
    useEffect(() => {
        setSplitSteps(steps.slice(indices[0], indices[1]));
    }, []);

    // update the items on the stepper when the indices updates
    useEffect(() => {
        setSplitSteps(steps.slice(indices[0], indices[1]));
    }, [indices]);

    /**
     * When an item in the stepper is clicked, it's parent
     * index is updated accordingly
     *
     * @param {index} step
     */
    const handleStep = (step) => {
        setActiveStep(indices[0] + step);
        setActiveIndex(step);
        props.setParentIndex(indices[0] + step);
    };

    /**
     * Update the stepper to render the 9 items depending on the page
     * @param {number} index
     */
    const updatePage = (index) => {
        setIndices([(index - 1) * 9, index * 9]);
        setActiveIndex(0);
        props.setParentIndex((index - 1) * 9);
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
                                        active: classes.step_label_root,
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
                <CustomPagination count={steps.length} updatePage={updatePage} size={9} />
            </div>
        </div>
    );
}
