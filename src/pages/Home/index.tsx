import { useEffect, useState } from "react";
import { CardItemMenu, Header } from "../../components";
import { ICardMenuItem } from "../../interfaces/cardMenuItemInterface";
import { Container, ContainerBurguers, Title } from "./style";
import data from '../../data/menuData.json'
import { useCart } from "../../contexts/cartContext";

export default function Home() {
    const [burguers, setBurguers] = useState<ICardMenuItem[]>([] as ICardMenuItem[]);
    const { loadCacheData } = useCart();

    useEffect(() => {
        setBurguers(data);
        loadCacheData();
    }, [])
    
  return (
    <Container>
        <Header />
        <Title>Burguers</Title>
        <ContainerBurguers>
            {
                burguers.map(burguer => <CardItemMenu id={burguer.id} price={burguer.price} description={burguer.description} name={burguer.name} key={burguer.name}/>)
            }
        </ContainerBurguers>
    </Container>
  )
}
