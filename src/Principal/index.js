import React from 'react'

import Logo from '../assets/logo.png'
import Lupa from '../assets/lupinha.png'
import Ten1 from '../assets/ten2.png'
import Ten2 from '../assets/ten1.png'
import Ten3 from '../assets/ten3.png'
import Ten4 from '../assets/ten4.png'
import Shoe from '../assets/shoes1.png'
import Background from '../assets/Mask.png'
import Title from '../assets/title.png'
import NewComer from '../assets/newcomer.png'
import Men from '../assets/men.png'
import Women from '../assets/women.png'
import Kids from '../assets/kids.png'
import Brazil from '../assets/brazil.mp4'
import Nike1 from '../assets/nike1.png'
import Nike2 from '../assets/nike2.png'
import Nike3 from '../assets/nike3.png'
import Yellow from '../assets/yellowfinish.png'

import {
  Container,
  Header,
  P,
  Section,
  ContainerShoes,
  H1,
  Div,
  Just,
  ContainerBR,
  ContainerNikes,
  ContainerYellow,
  Button,
  YellowText,
  Footer,
  Container1,
  Container2
} from './styles'

function Principal () {
  return (
        <Container>
            <Header>
                <img src={Logo} alt='logo' />
                <P>Men</P>
                <P>Women</P>
                <P>Kids</P>
                <P>Customise</P>
                <P>Sale</P>
                <P>Shipping</P>
                <img src={Lupa} alt='lupinha' style={{ marginLeft: 820 }} />
            </Header>

            <Section>
                <img className='BGimg' src={Background} />
                <ContainerShoes>
                    <img src={Ten1} />
                    <img src={Ten2} />
                    <img src={Ten3} />
                    <img src={Ten4} />
                </ContainerShoes>
                <img className='ImgShoe' src={Shoe} />
                <img className='Air' src={Title} />
            </Section>

            <Div>
                <H1>Just do it</H1>
                <p>Captures messages that stands for more than just sport. </p>
                <Just>
                    <img src={NewComer} />
                    <img src={Men} />
                    <img src={Women} />
                    <img src={Kids} />
                </Just>
            </Div>

            <ContainerBR>
                <p className='Members'>Members-only early release</p>
                <h1 className='H1zin'>OUR CLAW MOVES FORWARD</h1>
                <p className='P2'>They are part of who we are as Brazilians. Now Nike Members can show their pride and grit with exclusive <br /> early access to the 2022 collection of the Brazilian National Team.</p>
                <video src={Brazil} width="100%" height="100%" controls="controls" autoPlay="autoplay" muted loop />
            </ContainerBR>

            <ContainerNikes>
                <h1>
                    Popular Picks
                </h1>
                <p>Our popular picks for most favorited Nike Men’s & Women’s shoes.</p>
                <img src={Nike1} />
                <img src={Nike2} />
                <img src={Nike3} />
            </ContainerNikes>

            <ContainerYellow>
                <YellowText>
                    <h1>Rewarding <br /> Days Ahead</h1>
                    <p>More rewards for Members as we celebrate <br /> the Nike App Anniversary.</p>
                    <p>From 02 - 07 Aug, stand a chance to score a pair <br />  of Nike Air Max “all type” when you shop on the<br />  Nike App.</p>
                    <p>Not a Nike Member?</p>
                    <Button>Join Now</Button>
                </YellowText>

                <img src={Yellow} />
            </ContainerYellow>

            <Footer>
                <Container1>
                    <h3>MENU</h3>
                    <p>FIND A STORE</p>
                    <p>BECOME A MEMBER</p>
                    <p>SIGN UP FOR EMAIL</p>
                    <p>STUDENT DISCOUNTS</p>
                    <p>SEND US FEEDBACK</p>
                </Container1>

                <Container1>
                    <h3>HELPDESK</h3>
                    <p>ORDER STATUS</p>
                    <p>DELIVERY</p>
                    <p>RETURNS</p>
                    <p>PAYMENT OPTIONS</p>
                    <p>CONTACT US</p>
                </Container1>

                <Container1>
                    <h3>ABOUT NIKE</h3>
                    <p>NEWS</p>
                    <p>CAREERS</p>
                    <p>INVESTORS</p>
                    <p>SUSTAINABILITY</p>
                    <p>_</p>
                </Container1>

                <Container2>
                    <h4>© 2022 Nike, Inc. All Rights Reserved</h4>
                    <p>Primary Address</p>
                    <p>One Bowerman Drive <br/>
                        Beaverton, OR 97005-6453 <br/>
                        USA</p>
                </Container2>
            </Footer>
        </Container>
  )
}

export default Principal
