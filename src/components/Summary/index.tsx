import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if(transaction.type === 'income'){
        accumulator.income += transaction.price
        accumulator.total += transaction.price
      }
      else{
        accumulator.outcome += transaction.price
        accumulator.total -= transaction.price
      }
      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      
      <SummaryCard>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}