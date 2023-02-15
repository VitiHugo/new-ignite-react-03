import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transacao</Dialog.Title>
        
        <CloseButton>
           <X size={24}/>
        </CloseButton>

        <form action="">
          <input type="text" name="Description" placeholder="Description" required />
          <input type="number" name="Price" placeholder="Price" required />
          <input type="text" name="Category" placeholder="Category" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24}/>
              Outcome
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Save</button>
        </form>        
      </Content>
    </Dialog.Portal>
  )
}