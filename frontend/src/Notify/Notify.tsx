import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import styled from "styled-components";
import classNames from "classNames";
import "./Styles/styles.css";

interface NotifyProps {
  theme: string;
  content: string;
  setNotify: (notifyContent: string) => void;
}

export const Notify = ({
  theme,
  content,
  setNotify,
}: NotifyProps): React.ReactElement => {
  const onCloseHandle = (): void => {
    setNotify("");
  };

  return (
    <Container theme={theme} className={classNames({ anim: content })}>
      {content}
      <CloseButton onClick={onCloseHandle}>
        <XMarkIcon height={20} />
      </CloseButton>
    </Container>
  );
};

const Container = styled.div<{ theme: string }>`
  position: absolute;
  top: -100px;
  left: calc(50% - 155px);
  width: 320px;
  z-index: 99;
  word-break: break-word;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  border: 2px solid var(--notify-${(props) => props.theme}-border-color);
  color: var(--notify-${(props) => props.theme}-text-color);
  background-color: var(--notify-${(props) => props.theme}-bg-color);
  &:hover {
    border-color: var(--notify-${(props) => props.theme}-border-color--hover);
  }
  &.anim {
    animation: test 0.7s forwards;
  }

  @keyframes test {
    from {
      top: -100px;
    }
    to {
      top: 50px;
    }
  }
`;

const CloseButton = styled.p`
  position: absolute;
  cursor: pointer;
  top: -10px;
  right: 10px;
  width: 20px;
  height: 20px;
`;
