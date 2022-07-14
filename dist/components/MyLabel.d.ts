/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * The label that is going to be visible for the user
     */
    label: string;
    /**
     * The different size the label text can have.
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * The color that will have the span
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Select the color of your preference
     */
    fontColor?: string;
    /**
     * Transform all the text inside the span on CAPS
     */
    allCaps?: boolean;
}
/**
 * Custom component that allows you to define a Span with custom text and size.
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: MyLabelProps) => JSX.Element;
