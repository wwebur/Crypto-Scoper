import { render, screen } from "@testing-library/react";
import { exchange } from "src/fixtures/exchange.fixture";
import ExchangeRow from "./ExchangeRow"

test('on initial render, exchange row is rendered', () => {
  render(<ExchangeRow id={'Binance'} exchange={exchange} counter={1}/>)
})