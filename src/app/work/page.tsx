import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
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
      <Projects />
    </Column>
  );
}
