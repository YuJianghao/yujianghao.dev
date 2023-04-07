import { ReactNode } from "react"
import { IProject, IWork, projects, works } from "./data"

interface BaseItemProps {
  children: ReactNode
  time: string
  details: string[]
}

function BaseItem(props: BaseItemProps) {
  const { children, time, details } = props
  return (
    <div>
      <h3>
        <span>{children}</span>
        <span />
        <span>{time}</span>
      </h3>
      {details.length > 0 && (
        <ul>
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function WorkItem({ work }: { work: IWork }) {
  const { company, position, skills, time, descriptions, links = [] } = work
  return (
    <BaseItem details={descriptions} time={time}>
      <span>{company}</span>
      <span>{position}</span>
      <span>{skills.join("/")}</span>
      {links.map((link, idx) => (
        <a href={link.url} key={idx}>
          {link.text}
        </a>
      ))}
    </BaseItem>
  )
}

function ProjectItem({ project }: { project: IProject }) {
  const { name, time, skills = [], descriptions = [], links = [] } = project
  return (
    <BaseItem details={descriptions} time={time}>
      <span>{name}</span>
      {skills.length > 0 && <span>{skills.join("/")}</span>}
      {links.map((link, idx) => (
        <a href={link.url} key={idx}>
          {link.text}
        </a>
      ))}
    </BaseItem>
  )
}

function Section({ title, children }: { title: string; children: any }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <main>
      <h1>于江浩</h1>
      <p>Hi，我是于江浩，一个享受编码乐趣的前端工程师。</p>
      <Section title="工作经历">
        {works.map((work, idx) => (
          <WorkItem key={idx} work={work} />
        ))}
      </Section>
      <Section title="个人项目">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </Section>
    </main>
  )
}

export default App
