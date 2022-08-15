import { render, screen } from "@testing-library/react";
import { exchange } from "src/fixtures/exchange.fixture";
import ExchangeRow from "./ExchangeRow"

test('on initial render, data is fetched', () => {
  render(<ExchangeRow id={'Binance'} exchange={exchange} />)
})