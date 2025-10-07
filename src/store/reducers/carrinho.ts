import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'
type CarrinhoState = {
  itens: Game[]
}
const initialState: CarrinhoState = { itens: [] }
const carrinhoSlice = createSlice({
  name: 'carrinho',
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Jogo já adicionado.')
      } else {
        state.itens.push(jogo)
      }
    }
  },
  initialState
})
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
