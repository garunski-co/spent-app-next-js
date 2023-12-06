// https://github.com/plaid/pattern/blob/master/client/src/components/LaunchLink.tsx
import React, { useEffect } from "react";
import {
  usePlaidLink,
  PlaidLinkOnSuccessMetadata,
  PlaidLinkOnExitMetadata,
  PlaidLinkError,
  PlaidLinkOptionsWithLinkToken,
  PlaidLinkOnEventMetadata,
  PlaidLinkStableEvent
} from "react-plaid-link";

interface Props {
  userId: number;
  itemId?: number | null;
  children?: React.ReactNode;
}

export default function LaunchLink(props: Props) {
  // define onSuccess, onExit and onEvent functions as configs for Plaid Link creation
  const onSuccess = async (
    publicToken: string,
    metadata: PlaidLinkOnSuccessMetadata
  ) => {};

  const onExit = async (
    error: PlaidLinkError | null,
    metadata: PlaidLinkOnExitMetadata
  ) => {};

  const onEvent = async (
    eventName: PlaidLinkStableEvent | string,
    metadata: PlaidLinkOnEventMetadata
  ) => {};

  const config: PlaidLinkOptionsWithLinkToken = {
    onSuccess,
    onExit,
    onEvent,
    token: null
  };

  config.receivedRedirectUri = window.location.href;

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    open();
  }, [ready, open, props.userId, props.itemId, null]);

  return <></>;
}
