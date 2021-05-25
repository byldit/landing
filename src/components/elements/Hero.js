import styled from 'styled-components';

const StyledHero = styled.div`
    width: 100%;
    height:300px;
    background: url(/static/images/Hero.jpg) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;  

    @media(max-width: 768px) {
        height:200px
    }
    @media(max-width: 540px) {
        height:170px
    }
    @media(max-width: 340px) {
        height:100px
    }
`;


const Hero = () => (
    <StyledHero>
    </StyledHero>
);

export default Hero;