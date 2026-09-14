import {
  Heading,
  Text,
  Button,
  Card,
  RevealFx,
  Column,
  Badge,
  Grid,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Button href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
              Conheça minha trajetória
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column fillWidth gap="l">
          <Column maxWidth="s" gap="8">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Design e engenharia, conectados
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
              Transformo problemas de produto em experiências claras — da estratégia e interface à arquitetura e código.
            </Text>
          </Column>
          <Grid columns={2} s={{ columns: 1 }} fillWidth gap="16">
            <Card padding="l" direction="column" gap="16" border="neutral-alpha-weak" radius="l">
              <Badge background="brand-alpha-weak" onBackground="brand-strong" textVariant="label-default-s">
                Desenvolvimento Full-Stack
              </Badge>
              <Column gap="8">
                <Heading as="h3" variant="heading-strong-l">Produtos sólidos, escaláveis e performáticos.</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Arquitetura, front-end, APIs e integrações que dão vida a produtos digitais.
                </Text>
              </Column>
              <Button href="/work?discipline=development" variant="secondary" size="s" arrowIcon>
                Ver projetos de desenvolvimento
              </Button>
            </Card>
            <Card padding="l" direction="column" gap="16" border="neutral-alpha-weak" radius="l">
              <Badge background="accent-alpha-weak" onBackground="accent-strong" textVariant="label-default-s">
                UX/UI Design
              </Badge>
              <Column gap="8">
                <Heading as="h3" variant="heading-strong-l">Interfaces intencionais, simples de usar.</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Fluxos, protótipos e sistemas de interface orientados pelas necessidades das pessoas.
                </Text>
              </Column>
              <Button href="/work?discipline=design" variant="secondary" size="s" arrowIcon>
                Ver cases de UX/UI
              </Button>
            </Card>
          </Grid>
        </Column>
      </RevealFx>
      <Column fillWidth gap="l">
        <Row fillWidth horizontal="between" vertical="end" s={{ direction: "column", vertical: "start" }} gap="16">
          <Column gap="8">
            <Heading as="h2" variant="display-strong-xs">Trabalhos selecionados</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">Cases que unem raciocínio de produto e execução técnica.</Text>
          </Column>
          <Button href="/work/" variant="tertiary" size="s" arrowIcon>Ver todos os projetos</Button>
        </Row>
        <Projects range={[1, 2]} />
      </Column>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Posts recentes do blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Mailchimp />
    </Column>
  );
}
