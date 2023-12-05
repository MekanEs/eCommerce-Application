import { render } from '@testing-library/react';
import CreateMessage from './getMessage';

test('renders the message with the correct class', () => {
  const message = 'This is a test message';
  const className = 'error';

  const { getByText } = render(
    <CreateMessage Message={message} className={className} />,
  );

  const messageElement = getByText(message);
  expect(messageElement).toBeInTheDocument();
});

test('renders the message text', () => {
  const message = 'This is a test message';
  const { getByText } = render(
    <CreateMessage Message={message} className="error" />,
  );
  const messageElement = getByText(message);
  expect(messageElement).toBeInTheDocument();
});
