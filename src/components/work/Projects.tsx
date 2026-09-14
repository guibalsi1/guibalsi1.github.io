import { getPosts } from "@/utils/utils";
import type { ProjectDiscipline } from "@/utils/utils";
import { Card, Column, Heading, Text } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  discipline?: ProjectDiscipline;
}

export function Projects({ range, exclude, discipline }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  if (discipline) {
    allProjects = allProjects.filter((post) => post.metadata.discipline === discipline);
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  if (displayedProjects.length === 0) {
    const emptyState = discipline === "design"
      ? {
          title: "Cases de UX/UI em preparação",
          description: "Os próximos cases vão detalhar o problema, os fluxos, os protótipos e as decisões de interface.",
        }
      : {
          title: "Nenhum projeto nesta categoria",
          description: "Selecione outra disciplina para explorar os trabalhos disponíveis.",
        };

    return (
      <Card fillWidth padding="l" direction="column" gap="8" border="neutral-alpha-weak" radius="l">
        <Heading as="h2" variant="heading-strong-m">{emptyState.title}</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">{emptyState.description}</Text>
      </Card>
    );
  }

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          discipline={post.metadata.discipline || "development"}
          tools={post.metadata.tools || []}
        />
      ))}
    </Column>
  );
}
