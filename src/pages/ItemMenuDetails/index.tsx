import BurguerImage from '../../assets/burguer-big-image.png'
import { Container, Description, Divider, Image, Label, ObservationField, Price, Title } from './style'
import { Header } from '../../components'
import { formatToCurrency } from '../../utils/utils'
import Navbar from '../../components/Navbar'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import data from '../../data/menuData.json'
import { ICardMenuItem } from '../../interfaces/cardMenuItemInterface'

export default function ItemMenuDetails() {
    const location = useLocation();
    const [burguer, setBurguer] = useState<ICardMenuItem>({} as ICardMenuItem);
    const [observation, setObservation] = useState('')

    useEffect(() => {
        const id = location.pathname.split('/')[2]
        const selectedBurguer = data.find(burguer => burguer.id === id)
        if(selectedBurguer){
            setBurguer(selectedBurguer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <Container>
        <Header />
        <Title>{burguer.name}</Title>
        <Image src={BurguerImage} alt='Hambúrguer do Bortolussi' />
        <Description>{burguer.description}</Description>
        <Price>{formatToCurrency(burguer.price)}</Price>
        <Divider></Divider>
        <Label>Observações</Label>
        <ObservationField value={observation} onChange={e => setObservation(e.target.value ?? '')} placeholder='EX: Sem salada, carne ao ponto.'/>
        <Navbar buttonText="Adicionar ao carrinho" menuItem={burguer} observation={observation}/>
    </Container>
  )
}
