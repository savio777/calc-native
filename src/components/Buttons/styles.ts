import styled from "styled-components/native";

import { InterfaceButton } from "../../interfaces";
import { colors } from "../../Config";

export const Container = styled.TouchableOpacity<InterfaceButton>`
  flex: 1;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => colors[props.type]};
  max-height: 50px;
  width: 100%;
`;

const colorsText = (type: "primary" | "secunday" | "normal"): string => {
  switch (type) {
    case "normal":
      return "#fff";
    case "secunday":
      return "#fff";
    case "primary":
      return colors.background;
  }
};

export const Text = styled.Text<InterfaceButton>`
  color: ${(props) => colorsText(props.type)};
`;
