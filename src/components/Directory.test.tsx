import { render, screen } from "@testing-library/react";
import ExchangeRow from "./ExchangeRow"

test('on initial render, data is fetched', () => {
  render(<ExchangeRow/>)
}
)