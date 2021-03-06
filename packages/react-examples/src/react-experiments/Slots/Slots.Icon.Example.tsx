import * as React from 'react';
import { Button } from '@fluentui/react-experiments';
import { IStackProps, Spinner, Stack } from '@fluentui/react';

const stackProps: IStackProps = { tokens: { childrenGap: 16 }, padding: 8, maxWidth: 400 };

export class SlotsIconExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack {...stackProps}>
        <Button icon="share" content="Icon: String" />
        <Button icon={{ iconName: 'share' }} content="Icon: Props, iconName: 'share'" />
        <Button
          icon="upload"
          slots={{
            icon: {
              render: (iconProps, DefaultComponent) => (
                <b>
                  Icon: <DefaultComponent {...iconProps} />
                </b>
              ),
            },
          }}
          content="Icon: Function, Text + Icon"
        />
        <Button slots={{ icon: { render: () => <Spinner /> } }} content="Icon: Function, Spinner" />
      </Stack>
    );
  }
}
