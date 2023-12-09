import FlattenSimpleInterpolation from "styled-components";
import { css } from "styled-components";

const sizes = {
  large: 1200,
  medium: 992,
  small: 768,
};

type Media = {
  [index: string]: (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => FlattenSimpleInterpolation;
};

export const media = Object.keys(sizes).reduce((acc: Media, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(literals, ...placeholders)};
    }
  `;

  return acc;
}, {});
