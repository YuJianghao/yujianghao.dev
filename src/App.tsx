import { ReactNode } from "react"
import { IWork, works } from "./data"
import { Icon } from "./Icon"

interface BaseItemProps {
  children: ReactNode
  time: string
  details: string[]
}

function BaseItem(props: BaseItemProps) {
  const { children, time, details } = props
  return (
    <div>
      <h3 className="text-base color-primary flex items-center">
        <span>{children}</span>
        <span className="flex-1" />
        <span className="text-sm">{time}</span>
      </h3>
      {details.length > 0 && (
        <ul className="font-light pl-4">
          {details.map((detail, idx) => (
            <li key={idx} className="list-dash">
              {detail}
            </li>
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
      {" · "}
      <span>{position}</span>
      <span className="ml-2 font-light">{skills.join("/")}</span>
      {links.map((link, idx) => (
        <a href={link.url} key={idx} target="_blank">
          {link.text}
        </a>
      ))}
    </BaseItem>
  )
}

function Section({ title, children }: { title: string; children: any }) {
  return (
    <section>
      <h2 className="text-xl color-primary border-b-2 border-b-solid">
        {title}
      </h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <main className="mx-auto lg:w-180">
      <div className="bg-primary color-light p4">
        <h1>于江浩</h1>
        <p className="font-light">
          Hi，我是于江浩，一个享受编码乐趣的前端工程师。
        </p>
        <p className="font-light font-mono text-xs">
          <a
            href="mail:yjh2011@live.com"
            className="color-light decoration-none"
          >
            <Icon name="i-carbon-email" /> yjh2011@live.com
          </a>
          <a
            href="https://github.com/YuJianghao"
            className="color-light decoration-none ml-2"
          >
            <Icon name="i-mdi-github" className="color-light" /> YuJianghao
          </a>
        </p>
      </div>
      <Section title="工作经历">
        {works.map((work, idx) => (
          <WorkItem key={idx} work={work} />
        ))}
      </Section>
    </main>
  )
}

export default App
