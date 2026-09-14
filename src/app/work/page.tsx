import { Column, Heading, Meta, Row, Schema, Text, ToggleButton } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import type { ProjectDiscipline } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

type WorkPageProps = {
  searchParams: Promise<{ discipline?: string }>;
};

const disciplines: ProjectDiscipline[] = ["development", "design", "end-to-end"];

export default async function Work({ searchParams }: WorkPageProps) {
  const { discipline: requestedDiscipline } = await searchParams;
  const discipline = disciplines.includes(requestedDiscipline as ProjectDiscipline)
    ? (requestedDiscipline as ProjectDiscipline)
    : undefined;

  return (
    <Column maxWidth="m" paddingTop="24" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="12" horizontal="center" align="center">
        <Heading variant="heading-strong-xl" align="center">{work.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center" wrap="balance">
          Cases de produto que conectam experiência, interface e implementação.
        </Text>
      </Column>
      <Row horizontal="center" wrap gap="4">
        <ToggleButton href="/work" label="Todos" selected={!discipline} variant="outline" />
        <ToggleButton href="/work?discipline=development" label="Desenvolvimento" selected={discipline === "development"} variant="outline" />
        <ToggleButton href="/work?discipline=design" label="UX/UI Design" selected={discipline === "design"} variant="outline" />
        <ToggleButton href="/work?discipline=end-to-end" label="End-to-end" selected={discipline === "end-to-end"} variant="outline" />
      </Row>
      <Projects discipline={discipline} />
    </Column>
  );
}
