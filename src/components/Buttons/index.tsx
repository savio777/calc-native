import React from "react";

import { ButtonProps } from "react-native";
import { InterfaceButton } from "../../interfaces";

import { Container, Text } from "./styles";

interface Props extends InterfaceButton, ButtonProps {}

const Buttons: React.FC<Props> = (props) => (
  <Container {...props}>
    <Text type={props.type}>{props.children}</Text>
  </Container>
);

export default Buttons;
