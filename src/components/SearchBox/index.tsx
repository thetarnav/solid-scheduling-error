import { Component } from "solid-js";
import classes from "./SearchBox.module.css";

type Props = {
  /**
   * current input
   */
  input: string;
  /**
   * onChange handler
   */
  onChange: (input: string) => void;
};

export const SearchBox: Component<Props> = (props) => {
  return (
    <div class={classes.wrapper}>
      <input
        class={classes.input}
        value={props.input}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
    </div>
  );
};
