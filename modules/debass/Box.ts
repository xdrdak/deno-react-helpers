import { styled, css, get, shouldForwardProp } from "./deps.ts";

const sx = (props: { theme: any; sx: any }) => css(props.sx)(props.theme);
const base = (props: any) => css(props.__css)(props.theme);
const variant = ({
  theme,
  variant,
  tx = "variants",
}: { theme?: any; variant: "string"; tx: string }) =>
  css(
    get(theme, tx + "." + variant, get(theme, variant)),
  )(theme);

const Box = styled("div", {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
);

export { Box };
