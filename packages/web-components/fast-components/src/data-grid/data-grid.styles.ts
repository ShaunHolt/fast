import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { accentForegroundRestBehavior, heightNumber } from "../styles/index";

export const DataGridStyles = css`
:host {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
}
`.withBehaviors(accentForegroundRestBehavior);