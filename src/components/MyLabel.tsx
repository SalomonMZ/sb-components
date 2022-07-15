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
export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color,
  allCaps,
  fontColor,
}: MyLabelProps) => {
  const textToPresent = allCaps ? label.toUpperCase() : label;
  return (
    <span
      className={`label ${size} ${color && `text-${color}`}`}
      style={{ color: fontColor }}
    >
      {textToPresent}
    </span>
  );
};

export default MyLabel;
