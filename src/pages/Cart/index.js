import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total} from './styles';

function Cart() {
  return (
      <Container>
          <ProductTable>
              <thead>
                  <tr>
                      <th/>
                      <th>PRODUTO</th>
                      <th>QTD</th>
                      <th>SUBTOTAL</th>
                      <th/>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <img src='https://www.gtagames.com.br/xbox-one-naruto-4-shippuden-ultimate-storm-4-road-to-boruto-100-em-portugus-novo/prod-5208459/'
                          alt='Naruto Ninja Storm 4 xbox One'/>
                      </td>
                      <td>
                          <strong>Naruto Ultimate Ninja Storm 4 Xbox One</strong>
                          <span>R$ 150,00</span>
                      </td>
                      <td>
                          <div>
                            <button type='button'>
                              <MdRemoveCircleOutline size={20} color='#7159c1'/>
                            </button>
                            <input type='number' readOnly value={1} />
                            <button type='button'>
                              <MdAddCircleOutline size={20} color='#7159c1'/>
                            </button>
                          </div>
                      </td>
                      <td>
                          <strong>R$150,00</strong>
                      </td>
                      <td>
                          <button type='button'>
                              <MdDelete size={20} color='#7159c1'/>
                          </button>
                      </td>
                  </tr>
              </tbody>
          </ProductTable>
          <footer>
              <button type='button'>Finalizar Pedido</button>
              <Total>
                  <span>Total</span>
                  <strong>R$800,00</strong>
              </Total>
          </footer>
      </Container>
  )
}

export default Cart;
