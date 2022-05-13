import * as S from './styles'
import MainProps from './utils'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}: MainProps) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="dashboard-logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
