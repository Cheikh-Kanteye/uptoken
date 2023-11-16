import styled from "styled-components/native";
import { WIDTH, spacings, tabHeight } from "../misc/metrics";
import { StatusBar } from "react-native";

export const Header = styled.View`
  width: ${WIDTH}px;
  height: ${tabHeight}px;
  margin-top: ${StatusBar.currentHeight}px;
  display: flex;
  flex-direction: row;
  padding: 0 ${spacings.l}px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
`;

export const ProfileContainer = styled.View`
  width: 45px;
  height: 45px;
  overflow: hidden;
  background-color: lightgray;
`;

export const Title = styled.Text.attrs<{ $color: string }>((props) => ({
  type: "text",
  $color: props.$color || "white",
}))`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.$color};
`;
