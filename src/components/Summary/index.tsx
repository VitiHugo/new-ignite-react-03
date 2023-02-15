import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        
        <strong>17.400,00</strong>
      </SummaryCard>
      
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        
        <strong>1.200,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>12.900,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}